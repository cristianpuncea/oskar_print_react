import FooterCopyrights from "./components/FooterCopyrights";
import FooterLink from "./components/FooterLink";
import FooterLinksGroup from "./components/FooterLinksGroup";
import FooterSocialContainer from "./components/FooterSocialContainer";
import FooterSocialGroup from "./components/FooterSocialGroup";
import FooterSocialLink from "./components/FooterSocialLink";

function Footer() {
  return (
    <footer>
      <div className="footer-main">
        <div className="footer-links">
          <FooterLinksGroup title="Magazin">
            <FooterLink content="Servicii" />
            <FooterLink content="Produse" />
            <FooterLink content="Despre noi" />
            <FooterLink content="Contact" />
            <FooterLink content="Sitemap" />
          </FooterLinksGroup>

          <FooterLinksGroup title="Comenzi">
            <FooterLink content="Retur" />
            <FooterLink content="Transport" />
            <FooterLink content="Termeni si conditii" />
            <FooterLink content="Suport" />
          </FooterLinksGroup>
        </div>

        <FooterSocialContainer>
          <FooterSocialGroup title="Momentele noastre le impartim cu tine">
            <FooterSocialLink imgPath="/images/icons/footer/facebook-icon.svg" />
            <FooterSocialLink imgPath="/images/icons/footer/instagram-icon.svg" />
            <FooterSocialLink imgPath="/images/icons/footer/unsplash-icon.svg" />
          </FooterSocialGroup>

          <FooterSocialGroup title="Poti comanda oricand pe urmatoarele">
            <FooterSocialLink imgPath="/images/icons/footer/email-icon.svg" />
            <FooterSocialLink imgPath="/images/icons/footer/whatsapp-icon.svg" />
            <FooterSocialLink imgPath="/images/icons/footer/fmessenger-icon.svg" />
          </FooterSocialGroup>
        </FooterSocialContainer>
      </div>

      <FooterCopyrights />
    </footer>
  );
}

export default Footer;
