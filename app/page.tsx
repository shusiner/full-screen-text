"use client"

import { useState } from "react"

import { Textarea } from "@/components/ui/textarea"

export default function IndexPage() {
  const [text, setText] = useState("")
  return (
    <section className="p-4">
      <Textarea
        placeholder="Type your message here."
        onChange={(e) => setText(e.target.value)}
      />
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="scroll-m-20 break-all text-7xl font-extrabold tracking-tight">
          {text}
        </h1>
      </div>
    </section>
  )
}
