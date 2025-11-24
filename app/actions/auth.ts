'use server'

import { createClient } from '@supabase/supabase-js'

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  }
)

export async function registerUser(
  email: string, 
  password: string, 
  fullName: string, 
  username: string
) {
  try {
    console.log('🔵 Step 1: Creating user in auth.users...')
    
    // 1. Sign up user
    const { data: authData, error: authError } = await supabaseAdmin.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
    })

    if (authError) {
      console.error('❌ Auth error:', authError)
      throw authError
    }

    console.log('✅ User created:', authData.user.id)
    console.log('🔵 Step 2: Upserting into profiles table...')

    // 2. UPSERT profile (insert atau update kalau sudah ada)
    const { data: profileData, error: profileError } = await supabaseAdmin
      .from('profiles')
      .upsert({
        id: authData.user.id,
        full_name: fullName,
        username: username,
      }, {
        onConflict: 'id'
      })
      .select()

    if (profileError) {
      console.error('❌ Profile error:', profileError)
      throw profileError
    }

    console.log('✅ Profile created/updated:', profileData)

    return { success: true, user: authData.user }
  } catch (error: any) {
    console.error('❌ Registration failed:', error)
    return { success: false, error: error.message }
  }
}

export async function loginUser(email: string, password: string) {
  try {
    console.log('🔵 Attempting login for:', email)

    const { createClient } = await import('@supabase/supabase-js')
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )

    // Sign in
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      console.error('❌ Login error:', error)
      throw error
    }

    // Get user profile
    const { data: profile } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', data.user.id)
      .single()

    return { 
      success: true, 
      user: data.user,
      profile: profile,
      session: data.session
    }
  } catch (error: any) {
    console.error('❌ Login failed:', error)
    return { 
      success: false, 
      error: error.message || 'Email atau password salah'
    }
  }
}

export async function logoutUser() {
  try {
    const { createClient } = await import('@supabase/supabase-js')
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )

    const { error } = await supabase.auth.signOut()
    
    if (error) throw error

    return { success: true }
  } catch (error: any) {
    return { success: false, error: error.message }
  }
}