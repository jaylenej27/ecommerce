import Link from 'next/link';

export default function Header() {
  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: 30,
        background: '#eee',
        marginBottom: 40,
        borderBottom: '5px',
        borderBottomColor: '#82afba',
        maxWidth: 1140,
      }}
    >
      <ul style={{ listStyle: 'none' }}>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>

        <li>
          <Link href="/shop">
            <a>Shop</a>
          </Link>
        </li>

        <li>
          <Link href="/about-us">
            <a>About us</a>
          </Link>
        </li>

        <li>Logo</li>

        <li>
          <Link href="/contact">
            <a>Contact Us</a>
          </Link>{' '}
        </li>

        <li>
          <Link href="/faq">
            <a>FAQ</a>
          </Link>
        </li>

        <li>
          <Link href="/ship-return">
            <a>Shipping & Returns</a>
          </Link>
        </li>
      </ul>
    </header>
  );
}
