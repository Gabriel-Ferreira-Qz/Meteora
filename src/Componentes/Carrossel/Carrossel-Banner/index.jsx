export default function CarrosselBanner({ desktop, tablet, mobile, alt }) {
  return (
    <>
      <picture>
        <source srcSet={desktop} media="(min-width: 1220px"/>
        <source srcSet={tablet} media="(min-width: 768px"/>
        <img
          className="d-block w-100"
          src={mobile}
          alt={alt}
        />
      </picture>
    </>
  );
}