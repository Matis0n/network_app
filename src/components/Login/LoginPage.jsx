import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {required} from "../../utils/validators/validators";
import {Input} from "../common/FormsControls/FormsControls";
import {login} from "../../redux/auth-reducer";


const LoginPage = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Email"} name={"email"} validate={required} component={Input}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} validate={required} component={Input} type={"password"}/>
            </div>
            <div>
                <Field component={Input} name={"rememberMe"} type = {"checkbox"}/>
            </div>
            <div>
                <button> Login</button>
            </div>
        </form>
    );

}
const LoginReduxForm = reduxForm({form: 'login'})(LoginPage)

const Login =(props)=>{
    const onSubmit = (formData)=>{
        props.login(formData.email, formData.password,formData.rememberMe)
    }


    return(
        <div>
            <h1>Login</h1>
            <LoginReduxForm  onSubmit={onSubmit}/>
        </div>
    );
}

const mapStateToProps=(state)=>{
    return{
        isAuth:state.auth.isAuth
    }
}

export default connect(mapStateToProps, {login})(Login)