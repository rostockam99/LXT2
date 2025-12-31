"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

interface FAQAccordionProps {
  items: FAQItem[]
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  return (
    <section className="py-20 px-4 bg-card">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">Najczęściej Zadawane Pytania</h2>
          <p className="text-muted-foreground">Odpowiedzi na pytania naszych klientów</p>
        </div>

        <div className="space-y-4">
          {items.map((item, index) => (
            <div key={index} className="border border-border rounded-lg overflow-hidden">
              <button
                onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                className="w-full p-4 flex items-center justify-between hover:bg-secondary transition-colors"
              >
                <span className="font-semibold text-primary text-left">{item.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-primary transition-transform duration-300 flex-shrink-0 ${
                    expandedFaq === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {expandedFaq === index && (
                <div className="px-4 pb-4 border-t border-border text-muted-foreground">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
