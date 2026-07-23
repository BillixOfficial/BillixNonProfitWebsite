// Family front door — a phone capturing documents with live checks.
export default function PhoneMock() {
  return (
    <div className="rounded-xl3 border border-line bg-gradient-to-b from-[#eaf5f2] to-[#d8ece6] p-8 shadow-card">
      <div className="mx-auto max-w-[250px] rounded-[26px] border border-line bg-white p-4 shadow-float">
        <div className="mx-auto mb-4 h-1.5 w-11 rounded-full bg-[#dfe6e3]" />
        <Doc ok label="Photo ID" />
        <Doc ok label="Utility bill" />
        <Doc warn label="Pay stub" sub="Cut off, retake" />
        <div className="mt-1.5 rounded-xl bg-teal py-3 text-center text-[0.9rem] font-semibold text-white">
          Continue
        </div>
      </div>
    </div>
  )
}

function Doc({ label, sub, ok, warn }) {
  return (
    <div
      className={`mb-2.5 flex items-center gap-3 rounded-xl px-3.5 py-3 text-[0.9rem] font-semibold ${
        warn ? 'bg-[#fff5ec] text-[#b5651d]' : 'bg-mist text-tealDeep'
      }`}
    >
      <span
        className={`grid h-6 w-6 place-items-center rounded-full text-xs ${
          warn ? 'bg-[#fbe2c6] text-[#b5651d]' : 'bg-[#e9f6ee] text-cash'
        }`}
      >
        {warn ? '!' : '✓'}
      </span>
      <span>
        {label}
        {sub && <span className="block font-mono text-[0.62rem] font-normal opacity-80">{sub}</span>}
      </span>
    </div>
  )
}
