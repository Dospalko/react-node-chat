
import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {

  return (
    <div className="background">
      <PrettyChatWindow
        projectId={
          'f1d7db0c-a7ad-4d87-8dad-b832f530b552'}
        username={props.user.username}
        secret={props.user.secret}
      />
    </div>
  );
};

export default ChatsPage;