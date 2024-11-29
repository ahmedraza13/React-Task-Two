export default function TopicItem(props) {
    return (
        <a href="#" className="topic-btn">
        <div className="icon-box">
          <ion-icon name="server-outline" />
        </div>
        <p>{props.title}</p>
      </a>
    )
}