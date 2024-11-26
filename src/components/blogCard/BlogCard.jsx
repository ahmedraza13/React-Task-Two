import blogoneimg from '../../assets/images/blog-1.png'
import authorimg from '../../assets/images/author.png'
export default function BlogCard(props){
  console.log(props.data)
    return (
        <div className="blog-card">
              <div className="blog-card-banner">
                <img
                  src={props?.data?.cardImage}
                  alt="Building microservices with Dropwizard, MongoDB & Docker"
                  width={250}
                  className="blog-banner-img"
                />
              </div>
              <div className="blog-content-wrapper">
                <button className="blog-topic text-tiny">{props?.data?.topic}</button>
                <h3>
                  <a href="#" className="h3">
                   {props?.data?.title}
                  </a>
                </h3>
                <p className="blog-text">
                 {props?.data?.text}
                </p>
                <div className="wrapper-flex">
                  <div className="profile-wrapper">
                    <img
                      src={props?.data?.author?.image}
                      alt="Julia Walker"
                      width={50}
                    />
                  </div>
                  <div className="wrapper">
                    <a href="#" className="h4">
                    {props?.data?.author?.name}
                    </a>
                    <p className="text-sm">
                      <time dateTime="2022-01-17">{props?.data?.author?.date}</time>
                      <span className="separator" />
                      <ion-icon name="time-outline" />
                      <time dateTime="PT3M">{props?.data?.author?.time}</time>
                    </p>
                  </div>
                </div>
              </div>
            </div>
    )
}