/**
 * @name rz-dt
 * @abstract web component for html date-/time format
 * @description defined output of timezone, format and datetime
 * @version 0.1.0
 * @author ZHENG Robert
 * @param tz="<timezone>" default: Europe/Berlin
 * @param format="<output-format>" default: de-DE
 * @param fulldatetime="<yes|no>" default: yes
 * @param justdate="<yes|no>" default: no
 * @param justtime="<yes|no>" default: no
 */

class DatetimeComponent extends HTMLElement {
  static get observedAttributes() {
    return ["timezone", "format", "fulldatetime", "justdate", "justtime"];
  }

  constructor() {
    super();

    this._tz = "Europe/Berlin";
    this._format = "de-DE";
    this._fulldatetime = "yes";
    this._justdate = "no";
    this._justtime = "no";

    this.options = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: false,
      timeZone: this._tz,
    };
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.render();
  }

  getDT() {
    const TZ = this.getAttribute("tz") || `${this._tz}`;
    const FORMAT = this.getAttribute("format") || `${this._format}`;
    const DATETIME =
      this.getAttribute("fulldatetime") || `${this._fulldatetime}`;
    const DATE = this.getAttribute("justdate") || `${this._justdate}`;
    const TIME = this.getAttribute("justtime") || `${this._justtime}`;

    if (DATETIME === "yes") {
      this.options = {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: false,
        timeZone: TZ,
      };
    }
    if (DATE === "yes") {
      this.options = {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        timeZone: TZ,
      };
    }
    if (TIME === "yes") {
      this.options = {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: false,
        timeZone: TZ,
      };
    }

    const currentDate = new Date();
    const DT = new Intl.DateTimeFormat(FORMAT, this.options).format(
      this.currentDate
    );

    return DT;
  }

  render() {
    this.innerHTML = `
      <div class="datetime" id="datetime">
      ${this.getDT()}
    </div>
    `;
  }
}

customElements.define("rz-dt", DatetimeComponent);
