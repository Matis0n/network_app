import React, {useEffect} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profile-reducer";
import {useParams} from "react-router-dom";
import {compose} from "redux";

const ProfileContainer = (props) => {
        let userId = useParams()
        if (!userId) {
            userId = 10;
        }

        useEffect(()=>{
            props.getUserProfile(userId);
            props.getStatus(userId);
        })

        return (
            <Profile {...props} profile={props.profile} status={props.status}
                     updateStatus={props.updateStatus}/>
        )

}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
});

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
)(ProfileContainer);




