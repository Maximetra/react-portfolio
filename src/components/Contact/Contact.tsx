export function Contact() {
    return (
        <section id="contact">
        <div className="container mt-3 contactContent">
          <h1 className="text-center">Contactez-moi</h1>
          <hr />

          <div className="row mt-4">
            <form>
              <input type="text" className="form-control mt-3" placeholder="Name" />
              <input type="email" className="form-control mt-3" placeholder="Email" />
              <input type="text" className="form-control mt-3" placeholder="Subject" />
              <div className="mb-3 mt-3">
                <textarea className="form-control" rows={5} id="comment" name="text"
                  placeholder="Project Details"></textarea>
              </div>
            </form>
            <button type="button" className="btn btn-success mt-3">Contactez-moi</button>
          </div>
        </div>
      </section>
    )
}

export default Contact;