import "./Footer.css";

function Footer() {
  return (
    <div className="footer text-white flex flex-row justify-evenly items-center p-3">
      <div>
        <p className="text-footer">
          Project created by Paolo Viviani <br />
          for the start2Impact FronEnd Development master
        </p>
        <p className="mt-5 text-footer">
          Climate API taken from{" "}
          <a
            href="https://global-warming.org/"
            target="_blank"
            rel="noopener"
            className="underline"
          >
            GLOBAL WARMING
          </a>
        </p>
      </div>

      <div></div>

      <div>
        <p className="text-footer">The Homepage image by brgfx on Freepik</p>
        <p className="text-footer">
          <a
            href="https://www.freepik.com/free-vector/save-earth_4546022.htm#query=sick%20earth&position=46&from_view=keyword&track=ais&uuid=aab532d4-772f-49c9-a0dd-c2d1d2964878"
            target="_blank"
            rel="noopener"
            className="underline"
          >
            CLICK HERE
          </a>{" "}
          to view the source.
        </p>
      </div>
    </div>
  );
}

export default Footer;
