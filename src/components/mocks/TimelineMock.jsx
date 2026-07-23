// Pledge tracker — an approval followed to a confirmed hold.
export default function TimelineMock() {
  const steps = [
    { label: 'Grant approved', sub: 'Essex County · $612', state: 'done' },
    { label: 'Pledge sent to utility', sub: 'Timestamped · awaiting confirmation', state: 'now' },
    { label: 'Hold confirmed', sub: 'Escalates automatically near the shutoff date', state: 'wait' },
  ]
  return (
    <div className="rounded-xl3 border border-line bg-gradient-to-b from-[#eaf5f2] to-[#dcece7] p-8 shadow-card">
      <div className="rounded-xl2 border border-line bg-white p-6 shadow-card">
        <ul className="relative">
          {steps.map((s, i) => (
            <li key={s.label} className="relative pb-6 pl-9 last:pb-0">
              {i < steps.length - 1 && (
                <span className="absolute left-[9px] top-5 h-full w-0.5 bg-line" />
              )}
              <span
                className={`absolute left-0 top-0.5 grid h-5 w-5 place-items-center rounded-full text-[11px] font-bold ${
                  s.state === 'done'
                    ? 'bg-[#e9f6ee] text-cash'
                    : s.state === 'now'
                    ? 'bg-teal text-white ring-4 ring-teal/15'
                    : 'bg-[#eef1f0] text-[#9aa7a2]'
                }`}
              >
                {s.state === 'done' ? '✓' : s.state === 'now' ? '→' : '•'}
              </span>
              <div className="text-[0.95rem] font-semibold text-tealDeep">{s.label}</div>
              <div className="text-[0.8rem] text-muted">{s.sub}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
