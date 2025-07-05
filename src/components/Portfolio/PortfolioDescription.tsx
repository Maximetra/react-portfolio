type PortfolioDescriptionProps = {
  imageUrl?: string;
  title: string;
  description: string;
  link: string;
};

export function PortfolioDescription({ title, imageUrl, description, link }: PortfolioDescriptionProps) {
  return (
    <div className="col-lg-4 mt-4">
      <div className="card">
        {imageUrl && <img className="card-img-top" src={imageUrl} alt={title}
          style={{
            width: '100%'
          }}
        />}
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <p className="card-text">{description}</p>
          <div className="text-center">
            <a target="_blank" href={link} className="btn btn-success">Lien github</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PortfolioDescription;