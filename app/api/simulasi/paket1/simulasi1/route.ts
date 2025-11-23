import { NextResponse } from "next/server";
import { getSimulasiPaket1 } from "@/lib/simulasi/paket1/simulasi1";

export async function GET() {
  try {
    const questions = await getSimulasiPaket1();
    
    // Convert correct answers and add options field for all questions
    const convertedQuestions = questions.map((q: any) => {
      let correctIndex = q.correct;
      let options = q.options || [];
      
      // Handle Seksi 2 (kaidah) - merge optionsX and optionsY
      if (q.section === "kaidah" && q.optionsX && q.optionsY) {
        options = [...q.optionsX, ...q.optionsY];
        
        // Convert "A", "B", "C", "D" to index 0, 1, 2, 3
        const correctLetter = String(q.correct).toUpperCase();
        correctIndex = correctLetter.charCodeAt(0) - 65; // 'A' = 0, 'B' = 1, etc.
      }
      // Handle Seksi 1 & 3 - convert string answer to index
      else if (typeof q.correct === "string" && Array.isArray(options)) {
        correctIndex = options.findIndex((opt: string) => opt === q.correct);
        if (correctIndex === -1) correctIndex = 0;
      }
      // If correct is already a number, use as is
      else if (typeof q.correct === "number") {
        correctIndex = q.correct;
      }
      // Fallback
      else {
        correctIndex = 0;
      }
      
      return {
        ...q,
        options,
        correct: correctIndex
      };
    });
    
    return NextResponse.json(convertedQuestions);
  } catch (error) {
    console.error("Error loading questions:", error);
    return NextResponse.json(
      { error: "Failed to load questions", details: String(error) },
      { status: 500 }
    );
  }
}
