import { Link, useLocation } from 'react-router-dom';

export default function NotFound() {
  const { pathname } = useLocation();

  return (
    <section>
      <h2>404: Not Found</h2>

      <p>
        Invalid Path: <code>{pathname}</code>
      </p>

      <div style={{ marginTop: 12 }}>
        <Link to="/">Go Home</Link>
      </div>
    </section>
  );
}
