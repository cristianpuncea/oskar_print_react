function NavButton({ content }) {
  return (
    <li>
      <a className="font-btn-sm emphasis-btn-tertiary" href="#">
        {content}
      </a>
    </li>
  );
}

export default NavButton;
