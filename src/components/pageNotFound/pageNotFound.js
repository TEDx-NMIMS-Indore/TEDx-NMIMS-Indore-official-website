import "./pageNotFound.scss";
export default function PageNotFound() {
    alert("Oops! this page does not exists. I wonder how you got landed to this page 🤔🤷")
    return (
        <div>
            <section className="wrapper">
                <div className="container">
                    <div id="scene" className="scene" data-hover-only="false">
                        <div className="circle" data-depth="1.2"></div>

                        <div className="one" data-depth="0.9">
                            <div className="content">
                                <span className="piece"></span>
                                <span className="piece"></span>
                                <span className="piece"></span>
                            </div>
                        </div>

                        <div className="two" data-depth="0.60">
                            <div className="content">
                                <span className="piece"></span>
                                <span className="piece"></span>
                                <span className="piece"></span>
                            </div>
                        </div>

                        <div className="three" data-depth="0.40">
                            <div className="content">
                                <span className="piece"></span>
                                <span className="piece"></span>
                                <span className="piece"></span>
                            </div>
                        </div>

                        <p className="p404" data-depth="0.50">
                            404
                        </p>
                        <p className="p404" data-depth="0.10">
                            404
                        </p>
                    </div>

                    <div className="text">
                        <article>
                            <p>
                                Uh oh! Looks like you got lost. <br />
                                Please report to{" "}
                                <a href="mailto:sam.varg.2003@gmail.com">
                                    sam.varg.2003@gmail.com
                                </a>{" "}
                                how you landed at this page.
                            </p>
                            <a href="/">
                                <button>Home</button>
                            </a>
                        </article>
                    </div>
                </div>
            </section>
        </div>
    );
}
