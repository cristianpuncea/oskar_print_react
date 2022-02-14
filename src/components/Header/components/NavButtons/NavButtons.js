function NavButtons({ children }) {
    return (
        <div className="nav-btns">
          <ul>
            { children }
          </ul>
        </div>
    );
}

export default NavButtons;