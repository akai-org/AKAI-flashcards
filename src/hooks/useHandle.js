import { useContext } from 'react';
// import { render } from 'react-dom';
import Notification from 'components/atoms/Notification/Notification';
import WrapperContext from 'context/notification';

const useHandle = (type = 'error') => {
  //   const isOpen = useState(false);
  //   const rootElemRef = React.useRef(document.body);
  const { NotificationWrapperElement: Wrapper } = useContext(WrapperContext);

  // const NotificationHelper = () => <Notification>asd</Notification>;

  console.dir(Wrapper);

  console.log(type);
  const handleError = () => {
    Wrapper.children = {
      ...Wrapper.children,
      Notification,
    };
  };

  return handleError;
};

export default useHandle;
