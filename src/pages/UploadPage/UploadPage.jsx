import "./UploadPage.scss";
import Header from "../../components/Header/Header";
import UploadForm from "../../components/UploadForm/UploadForm";



function UploadPage() {

    

  return (
    <div className="uploadPage">
      <Header className="uploadPage__header" />

       <UploadForm />
    </div>
  );
}

export default UploadPage;
