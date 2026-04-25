import { useState } from 'react';
import { AlignLeft, Copy, Check } from 'lucide-react';

export default function ExplanationCard({ explanation }) {
  const [copied, setCopied] = useState(false);

  if (!explanation) return null;

  const handleCopy = async () => {
    const text =
      typeof explanation === 'string'
        ? explanation
        : JSON.stringify(explanation, null, 2);
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // explanation can be a string or an object with sections
  const renderExplanation = () => {
    if (typeof explanation === 'string') {
      return (
        <p className="text-[15px] leading-[1.6] text-[#c7c4d7]">
          {explanation}
        </p>
      );
    }

    // If explanation is an object with mainText + sections
    return (
      <div className="space-y-6">
        {explanation.mainText && (
          <p className="text-[15px] leading-[1.6] text-[#c7c4d7]">
            <strong className="text-white font-semibold">
              {explanation.pattern && `${explanation.pattern} `}
            </strong>
            {explanation.mainText}
          </p>
        )}

        {explanation.sections && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {explanation.sections.map((section, i) => (
              <div key={i} className="glass-card-sm p-5">
                <h4 className="text-sm font-semibold text-white mb-3">
                  {section.title}
                </h4>
                <ul className="space-y-2">
                  {section.items?.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-sm text-[#c7c4d7]"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#6366F1] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {explanation.footer && (
          <p className="text-[15px] leading-[1.6] text-[#c7c4d7]">
            {explanation.footer}
          </p>
        )}
      </div>
    );
  };

  return (
    <div className="glass-card p-6 md:p-8">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
            <AlignLeft size={16} className="text-[#c0c1ff]" />
          </span>
          <h2 className="text-xl md:text-2xl font-semibold tracking-[-0.01em] text-white">
            Deep Explanation
          </h2>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium
                     text-[#908fa0] hover:text-white hover:bg-white/5 border border-white/8
                     transition-all"
        >
          {copied ? (
            <>
              <Check size={14} className="text-green-400" /> Copied
            </>
          ) : (
            <>
              <Copy size={14} /> Copy
            </>
          )}
        </button>
      </div>

      {renderExplanation()}
    </div>
  );
}
