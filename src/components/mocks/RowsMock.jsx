// Caseworker workbench — applications arriving with income pre-computed.
export default function RowsMock() {
  const rows = [
    { id: 'Household #4821', income: '$2,140 / mo', status: 'Ready', ok: true },
    { id: 'Household #4822', income: '$1,780 / mo', status: 'Ready', ok: true },
    { id: 'Household #4823', income: '$3,010 / mo', status: 'Review flag', ok: false },
  ]
  return (
    <div className="rounded-xl3 border border-line bg-gradient-to-b from-[#eef6f3] to-[#e0efe9] p-8 shadow-card">
      <div className="overflow-hidden rounded-xl2 border border-line bg-white shadow-card">
        <div className="grid grid-cols-[1.3fr_1fr_auto] gap-3 border-b border-line bg-mist px-4 py-3 font-mono text-[0.6rem] uppercase tracking-wider text-muted">
          <span>Applicant</span>
          <span>Gross income</span>
          <span>Status</span>
        </div>
        {rows.map((r) => (
          <div
            key={r.id}
            className="grid grid-cols-[1.3fr_1fr_auto] items-center gap-3 border-b border-line px-4 py-3.5 text-[0.9rem] last:border-b-0"
          >
            <span className="font-semibold text-tealDeep">{r.id}</span>
            <span className="font-mono text-ink">{r.income}</span>
            <span
              className={`rounded-full px-2.5 py-1 text-[0.72rem] font-bold ${
                r.ok ? 'bg-[#e9f6ee] text-cash' : 'bg-mist text-teal'
              }`}
            >
              {r.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
