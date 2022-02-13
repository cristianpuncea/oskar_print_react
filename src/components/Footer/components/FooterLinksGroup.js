function FooterLinksGroup({ children, title }) {
  return (
    <div className="ul-links">
      <span>{title}</span>
      <ul>{children}</ul>
    </div>
  );
}

export default FooterLinksGroup;
