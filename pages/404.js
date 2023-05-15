import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <h2 className="title">Paage not found</h2>
      <Link href="/">
        <span className="btn">Go home</span>
      </Link>
      <style jsx>{`
        .title {
          text-align: center;
          padding: 24px;
        }
        .btn {
          display: block;
          text-align: center;
          color: #ffffff;
        }
      `}</style>
    </>
  );
}
