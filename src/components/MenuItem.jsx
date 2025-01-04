import Link from "next/link";

export default function MenuItem({ address, title, children }) {
  return (
    <Link href={address}>
      <div className="menu-item">
        {children} {/* Render children untuk ikon */}
        <p>{title}</p>
      </div>
    </Link>
  );
}