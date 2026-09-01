export default function ToolKeycap({ icon: Icon, label }) {
  return (
    <div className="keycap">
      <Icon size={20} />
      <span className="keycap-tooltip">{label}</span>
    </div>
  )
}
