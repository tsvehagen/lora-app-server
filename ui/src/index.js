import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Layout from './Layout';

// stores
import ErrorStore from "./stores/ErrorStore";

// applications
import ApplicationLayout from './views/applications/ApplicationLayout';
import ListApplications from './views/applications/ListApplications';
import CreateApplication from "./views/applications/CreateApplication";
import UpdateApplication from "./views/applications/UpdateApplication";
import ApplicationIntegrations from "./views/applications/ApplicationIntegrations";
import CreateApplicationIntegration from "./views/applications/CreateApplicationIntegration";
import UpdateApplicationIntegration from "./views/applications/UpdateApplicationIntegration";

// nodes
import NodeLayout from './views/nodes/NodeLayout';
import ListNodes from './views/nodes/ListNodes';
import UpdateNode from './views/nodes/UpdateNode';
import CreateNode from "./views/nodes/CreateNode";
import ActivateNode from "./views/nodes/ActivateNode";
import NodeFrameLogs from "./views/nodes/NodeFrameLogs";
import NodeKeys from "./views/nodes/NodeKeys";
import NodeActivation from "./views/nodes/NodeActivation";

// users
import Login from "./views/users/Login";
import CreateUser from "./views/users/CreateUser";
import ListUsers from "./views/users/ListUsers";
import UpdateUser from "./views/users/UpdateUser";
import UpdatePassword from "./views/users/UpdatePassword";

// gateways
import GatewayLayout from "./views/gateways/GatewayLayout";
import ListGateways from "./views/gateways/ListGateways";
import GatewayDetails from "./views/gateways/GatewayDetails";
import CreateGateway from "./views/gateways/CreateGateway";
import UpdateGateway from "./views/gateways/UpdateGateway";
import ListChannelConfigurations from "./views/gateways/ListChannelConfigurations";
import CreateChannelConfiguration from "./views/gateways/CreateChannelConfiguration";
import ChannelConfigurationLayout from "./views/gateways/ChannelConfigurationLayout";
import UpdateChannelConfiguration from "./views/gateways/UpdateChannelConfiguration";
import UpdateChannelConfigurationExtraChannels from "./views/gateways/UpdateChannelConfigurationExtraChannels";
import GatewayToken from "./views/gateways/GatewayToken";
import GatewayPing from "./views/gateways/GatewayPing";

// organizations
import OrganizationLayout from './views/organizations/OrganizationLayout';
import ListOrganizations from './views/organizations/ListOrganizations';
import CreateOrganization from './views/organizations/CreateOrganization';
import UpdateOrganization from './views/organizations/UpdateOrganization';
import OrganizationRedirect from './views/organizations/OrganizationRedirect';
import OrganizationUsers from './views/organizations/OrganizationUsers';
import CreateOrganizationUser from './views/organizations/CreateOrganizationUser';
import UpdateOrganizationUser from './views/organizations/UpdateOrganizationUser';

// service profiles
import ListServiceProfiles from "./views/serviceprofiles/ListServiceProfiles";
import CreateServiceProfile from "./views/serviceprofiles/CreateServiceProfile";
import UpdateServiceProfile from "./views/serviceprofiles/UpdateServiceProfile";

// device profiles
import ListDeviceProfiles from "./views/deviceprofiles/ListDeviceProfiles";
import CreateDeviceProfile from "./views/deviceprofiles/CreateDeviceProfile";
import UpdateDeviceProfile from "./views/deviceprofiles/UpdateDeviceProfile";

// network-servers
import NetworkServerLayout from "./views/networkservers/NetworkServerLayout";
import ListNetworkServers from "./views/networkservers/ListNetworkServers";
import CreateNetworkServer from "./views/networkservers/CreateNetworkServer";
import UpdateNetworkServer from "./views/networkservers/UpdateNetworkServer";

// fix leaflet image source
import Leaflet from 'leaflet';
Leaflet.Icon.Default.imagePath = '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.0.0/images/'

// styling
import 'bootstrap/dist/css/bootstrap.css';
import 'bootswatch/paper/bootstrap.css';
import 'react-select/dist/react-select.css';
import 'leaflet/dist/leaflet.css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/base16-light.css';
import './index.css';


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout} onChange={clearErrors}>
      <IndexRoute component={OrganizationRedirect}></IndexRoute>
      <Route path="login" component={Login}></Route>
      <Route path="users/create" component={CreateUser}></Route>
      <Route path="users/:userID/edit" component={UpdateUser}></Route>
      <Route path="users/:userID/password" component={UpdatePassword}></Route>
      <Route path="users" component={ListUsers}></Route>
      <Route path="organizations" component={ListOrganizations}></Route>
      <Route path="organizations/create" component={CreateOrganization}></Route>
  
      <Route path="network-servers" component={ListNetworkServers}></Route>
      <Route path="network-servers" component={ListNetworkServers}></Route>
      <Route path="network-servers/create" component={CreateNetworkServer}></Route>

      <Route path="network-servers/:networkServerID" component={NetworkServerLayout}>
        <IndexRoute component={UpdateNetworkServer}></IndexRoute>
        <Route path="channel-configurations" component={ListChannelConfigurations}></Route>
        <Route path="channel-configurations/create" component={CreateChannelConfiguration}></Route>
      </Route>

      <Route path="network-servers/:networkServerID/channel-configurations/:channelConfigurationID" component={ChannelConfigurationLayout}>
        <Route path="edit" component={UpdateChannelConfiguration}></Route>
        <Route path="extra-channels" component={UpdateChannelConfigurationExtraChannels}></Route>
      </Route>



      <Route path="organizations/:organizationID" component={OrganizationLayout}>
        <IndexRoute component={ListApplications}></IndexRoute>
        <Route path="edit" component={UpdateOrganization}></Route>
        <Route path="applications" component={ListApplications}></Route>
        <Route path="applications/create" component={CreateApplication}></Route>
        <Route path="gateways" component={ListGateways}></Route>
        <Route path="gateways/create" component={CreateGateway}></Route>
        <Route path="users" component={OrganizationUsers}></Route>
        <Route path="users/create" component={CreateOrganizationUser}></Route>
        <Route path="users/:userID/edit" component={UpdateOrganizationUser}></Route>
        <Route path="service-profiles" component={ListServiceProfiles}></Route>
        <Route path="service-profiles/create" component={CreateServiceProfile}></Route>
        <Route path="service-profiles/:serviceProfileID" component={UpdateServiceProfile}></Route>
        <Route path="device-profiles" component={ListDeviceProfiles}></Route>
        <Route path="device-profiles/create" component={CreateDeviceProfile}></Route>
        <Route path="device-profiles/:deviceProfileID" component={UpdateDeviceProfile}></Route>
      </Route>

      <Route path="organizations/:organizationID/gateways/:mac" component={GatewayLayout}>
        <IndexRoute component={GatewayDetails}></IndexRoute>
        <Route path="edit" component={UpdateGateway}></Route>
        <Route path="token" component={GatewayToken}></Route>
        <Route path="ping" component={GatewayPing}></Route>
      </Route>

      <Route path="organizations/:organizationID/applications/:applicationID" component={ApplicationLayout}>
        <IndexRoute component={ListNodes}></IndexRoute>
        <Route path="edit" component={UpdateApplication}></Route>
        <Route path="nodes/create" component={CreateNode}></Route>
        <Route path="integrations" component={ApplicationIntegrations}></Route>
        <Route path="integrations/create" component={CreateApplicationIntegration}></Route>
        <Route path="integrations/http" component={UpdateApplicationIntegration}></Route>
      </Route>

      <Route path="organizations/:organizationID/applications/:applicationID/nodes/:devEUI" component={NodeLayout}>
        <Route path="edit" component={UpdateNode}></Route>
        <Route path="activate" component={ActivateNode}></Route>
        <Route path="frames" component={NodeFrameLogs}></Route>
        <Route path="keys" component={NodeKeys}></Route>
        <Route path="activation" component={NodeActivation}></Route>
      </Route>
    </Route>
  </Router>,
  document.getElementById('root')
);

function clearErrors(prevRoute, nextRoute) {
  ErrorStore.clear();  
}
