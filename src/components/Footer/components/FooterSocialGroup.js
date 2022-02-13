import { Children } from "react/cjs/react.production.min";

function FooterSocialGroup({ title, children }) {
    return (
        <div className="ul-social">
            <span>{title}</span>
            <ul>
              {children}
            </ul>
          </div>
    );
}

export default FooterSocialGroup;