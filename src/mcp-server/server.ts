/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { VercelCore } from "../core.js";
import { SDKOptions } from "../lib/config.js";
import type { ConsoleLogger } from "./console-logger.js";
import { createRegisterPrompt } from "./prompts.js";
import {
  createRegisterResource,
  createRegisterResourceTemplate,
} from "./resources.js";
import { MCPScope } from "./scopes.js";
import { createRegisterTool } from "./tools.js";
import { tool$accessGroupsCreateAccessGroup } from "./tools/accessGroupsCreateAccessGroup.js";
import { tool$accessGroupsCreateAccessGroupProject } from "./tools/accessGroupsCreateAccessGroupProject.js";
import { tool$accessGroupsDeleteAccessGroup } from "./tools/accessGroupsDeleteAccessGroup.js";
import { tool$accessGroupsDeleteAccessGroupProject } from "./tools/accessGroupsDeleteAccessGroupProject.js";
import { tool$accessGroupsListAccessGroupMembers } from "./tools/accessGroupsListAccessGroupMembers.js";
import { tool$accessGroupsListAccessGroupProjects } from "./tools/accessGroupsListAccessGroupProjects.js";
import { tool$accessGroupsListAccessGroups } from "./tools/accessGroupsListAccessGroups.js";
import { tool$accessGroupsReadAccessGroup } from "./tools/accessGroupsReadAccessGroup.js";
import { tool$accessGroupsReadAccessGroupProject } from "./tools/accessGroupsReadAccessGroupProject.js";
import { tool$accessGroupsUpdateAccessGroup } from "./tools/accessGroupsUpdateAccessGroup.js";
import { tool$accessGroupsUpdateAccessGroupProject } from "./tools/accessGroupsUpdateAccessGroupProject.js";
import { tool$aliasesAssignAlias } from "./tools/aliasesAssignAlias.js";
import { tool$aliasesDeleteAlias } from "./tools/aliasesDeleteAlias.js";
import { tool$aliasesGetAlias } from "./tools/aliasesGetAlias.js";
import { tool$aliasesListAliases } from "./tools/aliasesListAliases.js";
import { tool$aliasesListDeploymentAliases } from "./tools/aliasesListDeploymentAliases.js";
import { tool$aliasesPatchUrlProtectionBypass } from "./tools/aliasesPatchUrlProtectionBypass.js";
import { tool$artifactsArtifactExists } from "./tools/artifactsArtifactExists.js";
import { tool$artifactsArtifactQuery } from "./tools/artifactsArtifactQuery.js";
import { tool$artifactsDownloadArtifact } from "./tools/artifactsDownloadArtifact.js";
import { tool$artifactsRecordEvents } from "./tools/artifactsRecordEvents.js";
import { tool$artifactsStatus } from "./tools/artifactsStatus.js";
import { tool$artifactsUploadArtifact } from "./tools/artifactsUploadArtifact.js";
import { tool$authenticationCreateAuthToken } from "./tools/authenticationCreateAuthToken.js";
import { tool$authenticationDeleteAuthToken } from "./tools/authenticationDeleteAuthToken.js";
import { tool$authenticationGetAuthToken } from "./tools/authenticationGetAuthToken.js";
import { tool$authenticationListAuthTokens } from "./tools/authenticationListAuthTokens.js";
import { tool$certsGetCertById } from "./tools/certsGetCertById.js";
import { tool$certsIssueCert } from "./tools/certsIssueCert.js";
import { tool$certsRemoveCert } from "./tools/certsRemoveCert.js";
import { tool$certsUploadCert } from "./tools/certsUploadCert.js";
import { tool$checksCreateCheck } from "./tools/checksCreateCheck.js";
import { tool$checksGetAllChecks } from "./tools/checksGetAllChecks.js";
import { tool$checksGetCheck } from "./tools/checksGetCheck.js";
import { tool$checksRerequestCheck } from "./tools/checksRerequestCheck.js";
import { tool$checksUpdateCheck } from "./tools/checksUpdateCheck.js";
import { tool$deploymentsCancelDeployment } from "./tools/deploymentsCancelDeployment.js";
import { tool$deploymentsCreateDeployment } from "./tools/deploymentsCreateDeployment.js";
import { tool$deploymentsDeleteDeployment } from "./tools/deploymentsDeleteDeployment.js";
import { tool$deploymentsGetDeployment } from "./tools/deploymentsGetDeployment.js";
import { tool$deploymentsGetDeploymentEvents } from "./tools/deploymentsGetDeploymentEvents.js";
import { tool$deploymentsGetDeploymentFileContents } from "./tools/deploymentsGetDeploymentFileContents.js";
import { tool$deploymentsGetDeployments } from "./tools/deploymentsGetDeployments.js";
import { tool$deploymentsListDeploymentFiles } from "./tools/deploymentsListDeploymentFiles.js";
import { tool$deploymentsUpdateIntegrationDeploymentAction } from "./tools/deploymentsUpdateIntegrationDeploymentAction.js";
import { tool$deploymentsUploadFile } from "./tools/deploymentsUploadFile.js";
import { tool$dnsCreateRecord } from "./tools/dnsCreateRecord.js";
import { tool$dnsGetRecords } from "./tools/dnsGetRecords.js";
import { tool$dnsRemoveRecord } from "./tools/dnsRemoveRecord.js";
import { tool$dnsUpdateRecord } from "./tools/dnsUpdateRecord.js";
import { tool$domainsBuyDomain } from "./tools/domainsBuyDomain.js";
import { tool$domainsCheckDomainPrice } from "./tools/domainsCheckDomainPrice.js";
import { tool$domainsCheckDomainStatus } from "./tools/domainsCheckDomainStatus.js";
import { tool$domainsCreateOrTransferDomain } from "./tools/domainsCreateOrTransferDomain.js";
import { tool$domainsDeleteDomain } from "./tools/domainsDeleteDomain.js";
import { tool$domainsGetDomain } from "./tools/domainsGetDomain.js";
import { tool$domainsGetDomainConfig } from "./tools/domainsGetDomainConfig.js";
import { tool$domainsGetDomains } from "./tools/domainsGetDomains.js";
import { tool$domainsGetDomainTransfer } from "./tools/domainsGetDomainTransfer.js";
import { tool$domainsPatchDomain } from "./tools/domainsPatchDomain.js";
import { tool$edgeConfigCreateEdgeConfig } from "./tools/edgeConfigCreateEdgeConfig.js";
import { tool$edgeConfigCreateEdgeConfigToken } from "./tools/edgeConfigCreateEdgeConfigToken.js";
import { tool$edgeConfigDeleteEdgeConfig } from "./tools/edgeConfigDeleteEdgeConfig.js";
import { tool$edgeConfigDeleteEdgeConfigSchema } from "./tools/edgeConfigDeleteEdgeConfigSchema.js";
import { tool$edgeConfigDeleteEdgeConfigTokens } from "./tools/edgeConfigDeleteEdgeConfigTokens.js";
import { tool$edgeConfigGetEdgeConfig } from "./tools/edgeConfigGetEdgeConfig.js";
import { tool$edgeConfigGetEdgeConfigBackup } from "./tools/edgeConfigGetEdgeConfigBackup.js";
import { tool$edgeConfigGetEdgeConfigBackups } from "./tools/edgeConfigGetEdgeConfigBackups.js";
import { tool$edgeConfigGetEdgeConfigItem } from "./tools/edgeConfigGetEdgeConfigItem.js";
import { tool$edgeConfigGetEdgeConfigItems } from "./tools/edgeConfigGetEdgeConfigItems.js";
import { tool$edgeConfigGetEdgeConfigs } from "./tools/edgeConfigGetEdgeConfigs.js";
import { tool$edgeConfigGetEdgeConfigSchema } from "./tools/edgeConfigGetEdgeConfigSchema.js";
import { tool$edgeConfigGetEdgeConfigToken } from "./tools/edgeConfigGetEdgeConfigToken.js";
import { tool$edgeConfigGetEdgeConfigTokens } from "./tools/edgeConfigGetEdgeConfigTokens.js";
import { tool$edgeConfigPatchEdgeConfigItems } from "./tools/edgeConfigPatchEdgeConfigItems.js";
import { tool$edgeConfigPatchEdgeConfigSchema } from "./tools/edgeConfigPatchEdgeConfigSchema.js";
import { tool$edgeConfigUpdateEdgeConfig } from "./tools/edgeConfigUpdateEdgeConfig.js";
import { tool$environmentCreateCustomEnvironment } from "./tools/environmentCreateCustomEnvironment.js";
import { tool$environmentGetCustomEnvironment } from "./tools/environmentGetCustomEnvironment.js";
import { tool$environmentGetV9ProjectsIdOrNameCustomEnvironments } from "./tools/environmentGetV9ProjectsIdOrNameCustomEnvironments.js";
import { tool$environmentRemoveCustomEnvironment } from "./tools/environmentRemoveCustomEnvironment.js";
import { tool$environmentUpdateCustomEnvironment } from "./tools/environmentUpdateCustomEnvironment.js";
import { tool$integrationsDeleteConfiguration } from "./tools/integrationsDeleteConfiguration.js";
import { tool$integrationsGetConfiguration } from "./tools/integrationsGetConfiguration.js";
import { tool$integrationsGetConfigurations } from "./tools/integrationsGetConfigurations.js";
import { tool$logDrainsCreateLogDrain } from "./tools/logDrainsCreateLogDrain.js";
import { tool$logDrainsDeleteIntegrationLogDrain } from "./tools/logDrainsDeleteIntegrationLogDrain.js";
import { tool$logDrainsGetIntegrationLogDrains } from "./tools/logDrainsGetIntegrationLogDrains.js";
import { tool$logsGetRuntimeLogs } from "./tools/logsGetRuntimeLogs.js";
import { tool$marketplaceCreateEvent } from "./tools/marketplaceCreateEvent.js";
import { tool$marketplaceCreateInstallationIntegrationConfiguration } from "./tools/marketplaceCreateInstallationIntegrationConfiguration.js";
import { tool$marketplaceCreateInstallationIntegrationEdgeConfig } from "./tools/marketplaceCreateInstallationIntegrationEdgeConfig.js";
import { tool$marketplaceDeleteInstallationIntegrationConfiguration } from "./tools/marketplaceDeleteInstallationIntegrationConfiguration.js";
import { tool$marketplaceDeleteIntegrationResource } from "./tools/marketplaceDeleteIntegrationResource.js";
import { tool$marketplaceExchangeSsoToken } from "./tools/marketplaceExchangeSsoToken.js";
import { tool$marketplaceGetAccountInfo } from "./tools/marketplaceGetAccountInfo.js";
import { tool$marketplaceGetIntegrationResource } from "./tools/marketplaceGetIntegrationResource.js";
import { tool$marketplaceGetIntegrationResources } from "./tools/marketplaceGetIntegrationResources.js";
import { tool$marketplaceGetInvoice } from "./tools/marketplaceGetInvoice.js";
import { tool$marketplaceGetMember } from "./tools/marketplaceGetMember.js";
import { tool$marketplaceImportResource } from "./tools/marketplaceImportResource.js";
import { tool$marketplaceSubmitBillingData } from "./tools/marketplaceSubmitBillingData.js";
import { tool$marketplaceSubmitInvoice } from "./tools/marketplaceSubmitInvoice.js";
import { tool$marketplaceSubmitPrepaymentBalances } from "./tools/marketplaceSubmitPrepaymentBalances.js";
import { tool$marketplaceUpdateInstallationIntegrationConfiguration } from "./tools/marketplaceUpdateInstallationIntegrationConfiguration.js";
import { tool$marketplaceUpdateInstallationIntegrationEdgeConfig } from "./tools/marketplaceUpdateInstallationIntegrationEdgeConfig.js";
import { tool$marketplaceUpdateInvoice } from "./tools/marketplaceUpdateInvoice.js";
import { tool$marketplaceUpdateResourceSecrets } from "./tools/marketplaceUpdateResourceSecrets.js";
import { tool$marketplaceUpdateResourceSecretsById } from "./tools/marketplaceUpdateResourceSecretsById.js";
import { tool$projectMembersAddProjectMember } from "./tools/projectMembersAddProjectMember.js";
import { tool$projectMembersGetProjectMembers } from "./tools/projectMembersGetProjectMembers.js";
import { tool$projectMembersRemoveProjectMember } from "./tools/projectMembersRemoveProjectMember.js";
import { tool$projectsAcceptProjectTransferRequest } from "./tools/projectsAcceptProjectTransferRequest.js";
import { tool$projectsAddProjectDomain } from "./tools/projectsAddProjectDomain.js";
import { tool$projectsCreateProject } from "./tools/projectsCreateProject.js";
import { tool$projectsCreateProjectEnv } from "./tools/projectsCreateProjectEnv.js";
import { tool$projectsCreateProjectTransferRequest } from "./tools/projectsCreateProjectTransferRequest.js";
import { tool$projectsDeleteProject } from "./tools/projectsDeleteProject.js";
import { tool$projectsEditProjectEnv } from "./tools/projectsEditProjectEnv.js";
import { tool$projectsFilterProjectEnvs } from "./tools/projectsFilterProjectEnvs.js";
import { tool$projectsGetProjectDomain } from "./tools/projectsGetProjectDomain.js";
import { tool$projectsGetProjectDomains } from "./tools/projectsGetProjectDomains.js";
import { tool$projectsGetProjectEnv } from "./tools/projectsGetProjectEnv.js";
import { tool$projectsGetProjects } from "./tools/projectsGetProjects.js";
import { tool$projectsListPromoteAliases } from "./tools/projectsListPromoteAliases.js";
import { tool$projectsMoveProjectDomain } from "./tools/projectsMoveProjectDomain.js";
import { tool$projectsPauseProject } from "./tools/projectsPauseProject.js";
import { tool$projectsRemoveProjectDomain } from "./tools/projectsRemoveProjectDomain.js";
import { tool$projectsRemoveProjectEnv } from "./tools/projectsRemoveProjectEnv.js";
import { tool$projectsRequestPromote } from "./tools/projectsRequestPromote.js";
import { tool$projectsUnpauseProject } from "./tools/projectsUnpauseProject.js";
import { tool$projectsUpdateProject } from "./tools/projectsUpdateProject.js";
import { tool$projectsUpdateProjectDataCache } from "./tools/projectsUpdateProjectDataCache.js";
import { tool$projectsUpdateProjectDomain } from "./tools/projectsUpdateProjectDomain.js";
import { tool$projectsUpdateProjectProtectionBypass } from "./tools/projectsUpdateProjectProtectionBypass.js";
import { tool$projectsVerifyProjectDomain } from "./tools/projectsVerifyProjectDomain.js";
import { tool$rollingReleaseApproveRollingReleaseStage } from "./tools/rollingReleaseApproveRollingReleaseStage.js";
import { tool$rollingReleaseCompleteRollingRelease } from "./tools/rollingReleaseCompleteRollingRelease.js";
import { tool$rollingReleaseDeleteRollingReleaseConfig } from "./tools/rollingReleaseDeleteRollingReleaseConfig.js";
import { tool$rollingReleaseGetRollingRelease } from "./tools/rollingReleaseGetRollingRelease.js";
import { tool$rollingReleaseGetRollingReleaseBillingStatus } from "./tools/rollingReleaseGetRollingReleaseBillingStatus.js";
import { tool$rollingReleaseGetRollingReleaseConfig } from "./tools/rollingReleaseGetRollingReleaseConfig.js";
import { tool$rollingReleaseUpdateRollingReleaseConfig } from "./tools/rollingReleaseUpdateRollingReleaseConfig.js";
import { tool$securityAddBypassIp } from "./tools/securityAddBypassIp.js";
import { tool$securityGetActiveAttackStatus } from "./tools/securityGetActiveAttackStatus.js";
import { tool$securityGetBypassIp } from "./tools/securityGetBypassIp.js";
import { tool$securityGetFirewallConfig } from "./tools/securityGetFirewallConfig.js";
import { tool$securityPutFirewallConfig } from "./tools/securityPutFirewallConfig.js";
import { tool$securityRemoveBypassIp } from "./tools/securityRemoveBypassIp.js";
import { tool$securityUpdateAttackChallengeMode } from "./tools/securityUpdateAttackChallengeMode.js";
import { tool$securityUpdateFirewallConfig } from "./tools/securityUpdateFirewallConfig.js";
import { tool$teamsCreateTeam } from "./tools/teamsCreateTeam.js";
import { tool$teamsDeleteTeam } from "./tools/teamsDeleteTeam.js";
import { tool$teamsDeleteTeamInviteCode } from "./tools/teamsDeleteTeamInviteCode.js";
import { tool$teamsGetTeam } from "./tools/teamsGetTeam.js";
import { tool$teamsGetTeamAccessRequest } from "./tools/teamsGetTeamAccessRequest.js";
import { tool$teamsGetTeamMembers } from "./tools/teamsGetTeamMembers.js";
import { tool$teamsGetTeams } from "./tools/teamsGetTeams.js";
import { tool$teamsInviteUserToTeam } from "./tools/teamsInviteUserToTeam.js";
import { tool$teamsJoinTeam } from "./tools/teamsJoinTeam.js";
import { tool$teamsPatchTeam } from "./tools/teamsPatchTeam.js";
import { tool$teamsRemoveTeamMember } from "./tools/teamsRemoveTeamMember.js";
import { tool$teamsRequestAccessToTeam } from "./tools/teamsRequestAccessToTeam.js";
import { tool$teamsUpdateTeamMember } from "./tools/teamsUpdateTeamMember.js";
import { tool$userGetAuthUser } from "./tools/userGetAuthUser.js";
import { tool$userListUserEvents } from "./tools/userListUserEvents.js";
import { tool$userRequestDelete } from "./tools/userRequestDelete.js";
import { tool$webhooksCreateWebhook } from "./tools/webhooksCreateWebhook.js";
import { tool$webhooksDeleteWebhook } from "./tools/webhooksDeleteWebhook.js";
import { tool$webhooksGetWebhook } from "./tools/webhooksGetWebhook.js";
import { tool$webhooksGetWebhooks } from "./tools/webhooksGetWebhooks.js";

export function createMCPServer(deps: {
  logger: ConsoleLogger;
  allowedTools?: string[] | undefined;
  scopes?: MCPScope[] | undefined;
  serverURL?: string | undefined;
  bearerToken?: SDKOptions["bearerToken"] | undefined;
  serverIdx?: SDKOptions["serverIdx"] | undefined;
}) {
  const server = new McpServer({
    name: "Vercel",
    version: "1.10.0",
  });

  const client = new VercelCore({
    bearerToken: deps.bearerToken,
    serverURL: deps.serverURL,
    serverIdx: deps.serverIdx,
  });

  const scopes = new Set(deps.scopes);

  const allowedTools = deps.allowedTools && new Set(deps.allowedTools);
  const tool = createRegisterTool(
    deps.logger,
    server,
    client,
    scopes,
    allowedTools,
  );
  const resource = createRegisterResource(deps.logger, server, client, scopes);
  const resourceTemplate = createRegisterResourceTemplate(
    deps.logger,
    server,
    client,
    scopes,
  );
  const prompt = createRegisterPrompt(deps.logger, server, client, scopes);
  const register = { tool, resource, resourceTemplate, prompt };
  void register; // suppress unused warnings

  tool(tool$accessGroupsReadAccessGroup);
  tool(tool$accessGroupsUpdateAccessGroup);
  tool(tool$accessGroupsDeleteAccessGroup);
  tool(tool$accessGroupsListAccessGroupMembers);
  tool(tool$accessGroupsListAccessGroups);
  tool(tool$accessGroupsCreateAccessGroup);
  tool(tool$accessGroupsListAccessGroupProjects);
  tool(tool$accessGroupsCreateAccessGroupProject);
  tool(tool$accessGroupsReadAccessGroupProject);
  tool(tool$accessGroupsUpdateAccessGroupProject);
  tool(tool$accessGroupsDeleteAccessGroupProject);
  tool(tool$artifactsRecordEvents);
  tool(tool$artifactsStatus);
  tool(tool$artifactsUploadArtifact);
  tool(tool$artifactsDownloadArtifact);
  tool(tool$artifactsArtifactExists);
  tool(tool$artifactsArtifactQuery);
  tool(tool$checksCreateCheck);
  tool(tool$checksGetAllChecks);
  tool(tool$checksGetCheck);
  tool(tool$checksUpdateCheck);
  tool(tool$checksRerequestCheck);
  tool(tool$projectsUpdateProjectDataCache);
  tool(tool$projectsGetProjects);
  tool(tool$projectsCreateProject);
  tool(tool$projectsUpdateProject);
  tool(tool$projectsDeleteProject);
  tool(tool$projectsGetProjectDomains);
  tool(tool$projectsGetProjectDomain);
  tool(tool$projectsUpdateProjectDomain);
  tool(tool$projectsRemoveProjectDomain);
  tool(tool$projectsAddProjectDomain);
  tool(tool$projectsMoveProjectDomain);
  tool(tool$projectsVerifyProjectDomain);
  tool(tool$projectsFilterProjectEnvs);
  tool(tool$projectsCreateProjectEnv);
  tool(tool$projectsGetProjectEnv);
  tool(tool$projectsRemoveProjectEnv);
  tool(tool$projectsEditProjectEnv);
  tool(tool$projectsCreateProjectTransferRequest);
  tool(tool$projectsAcceptProjectTransferRequest);
  tool(tool$projectsUpdateProjectProtectionBypass);
  tool(tool$projectsRequestPromote);
  tool(tool$projectsListPromoteAliases);
  tool(tool$projectsPauseProject);
  tool(tool$projectsUnpauseProject);
  tool(tool$deploymentsGetDeploymentEvents);
  tool(tool$deploymentsUpdateIntegrationDeploymentAction);
  tool(tool$deploymentsGetDeployment);
  tool(tool$deploymentsCreateDeployment);
  tool(tool$deploymentsCancelDeployment);
  tool(tool$deploymentsUploadFile);
  tool(tool$deploymentsListDeploymentFiles);
  tool(tool$deploymentsGetDeploymentFileContents);
  tool(tool$deploymentsGetDeployments);
  tool(tool$deploymentsDeleteDeployment);
  tool(tool$integrationsGetConfigurations);
  tool(tool$integrationsGetConfiguration);
  tool(tool$integrationsDeleteConfiguration);
  tool(tool$domainsBuyDomain);
  tool(tool$domainsCheckDomainPrice);
  tool(tool$domainsCheckDomainStatus);
  tool(tool$domainsGetDomainTransfer);
  tool(tool$domainsGetDomainConfig);
  tool(tool$domainsGetDomain);
  tool(tool$domainsGetDomains);
  tool(tool$domainsCreateOrTransferDomain);
  tool(tool$domainsPatchDomain);
  tool(tool$domainsDeleteDomain);
  tool(tool$dnsGetRecords);
  tool(tool$dnsCreateRecord);
  tool(tool$dnsUpdateRecord);
  tool(tool$dnsRemoveRecord);
  tool(tool$edgeConfigGetEdgeConfigs);
  tool(tool$edgeConfigCreateEdgeConfig);
  tool(tool$edgeConfigGetEdgeConfig);
  tool(tool$edgeConfigUpdateEdgeConfig);
  tool(tool$edgeConfigDeleteEdgeConfig);
  tool(tool$edgeConfigGetEdgeConfigItems);
  tool(tool$edgeConfigPatchEdgeConfigItems);
  tool(tool$edgeConfigGetEdgeConfigSchema);
  tool(tool$edgeConfigPatchEdgeConfigSchema);
  tool(tool$edgeConfigDeleteEdgeConfigSchema);
  tool(tool$edgeConfigGetEdgeConfigItem);
  tool(tool$edgeConfigGetEdgeConfigTokens);
  tool(tool$edgeConfigDeleteEdgeConfigTokens);
  tool(tool$edgeConfigGetEdgeConfigToken);
  tool(tool$edgeConfigCreateEdgeConfigToken);
  tool(tool$edgeConfigGetEdgeConfigBackup);
  tool(tool$edgeConfigGetEdgeConfigBackups);
  tool(tool$userListUserEvents);
  tool(tool$userGetAuthUser);
  tool(tool$userRequestDelete);
  tool(tool$marketplaceGetAccountInfo);
  tool(tool$marketplaceGetMember);
  tool(tool$marketplaceCreateEvent);
  tool(tool$marketplaceGetIntegrationResources);
  tool(tool$marketplaceGetIntegrationResource);
  tool(tool$marketplaceDeleteIntegrationResource);
  tool(tool$marketplaceImportResource);
  tool(tool$marketplaceSubmitBillingData);
  tool(tool$marketplaceSubmitInvoice);
  tool(tool$marketplaceGetInvoice);
  tool(tool$marketplaceUpdateInvoice);
  tool(tool$marketplaceSubmitPrepaymentBalances);
  tool(tool$marketplaceUpdateResourceSecrets);
  tool(tool$marketplaceUpdateResourceSecretsById);
  tool(tool$marketplaceExchangeSsoToken);
  tool(tool$marketplaceCreateInstallationIntegrationConfiguration);
  tool(tool$marketplaceUpdateInstallationIntegrationConfiguration);
  tool(tool$marketplaceDeleteInstallationIntegrationConfiguration);
  tool(tool$marketplaceCreateInstallationIntegrationEdgeConfig);
  tool(tool$marketplaceUpdateInstallationIntegrationEdgeConfig);
  tool(tool$authenticationListAuthTokens);
  tool(tool$authenticationCreateAuthToken);
  tool(tool$authenticationGetAuthToken);
  tool(tool$authenticationDeleteAuthToken);
  tool(tool$logDrainsGetIntegrationLogDrains);
  tool(tool$logDrainsCreateLogDrain);
  tool(tool$logDrainsDeleteIntegrationLogDrain);
  tool(tool$logsGetRuntimeLogs);
  tool(tool$projectMembersGetProjectMembers);
  tool(tool$projectMembersAddProjectMember);
  tool(tool$projectMembersRemoveProjectMember);
  tool(tool$environmentCreateCustomEnvironment);
  tool(tool$environmentGetV9ProjectsIdOrNameCustomEnvironments);
  tool(tool$environmentGetCustomEnvironment);
  tool(tool$environmentUpdateCustomEnvironment);
  tool(tool$environmentRemoveCustomEnvironment);
  tool(tool$rollingReleaseGetRollingReleaseBillingStatus);
  tool(tool$rollingReleaseGetRollingReleaseConfig);
  tool(tool$rollingReleaseDeleteRollingReleaseConfig);
  tool(tool$rollingReleaseUpdateRollingReleaseConfig);
  tool(tool$rollingReleaseGetRollingRelease);
  tool(tool$rollingReleaseApproveRollingReleaseStage);
  tool(tool$rollingReleaseCompleteRollingRelease);
  tool(tool$securityUpdateAttackChallengeMode);
  tool(tool$securityPutFirewallConfig);
  tool(tool$securityUpdateFirewallConfig);
  tool(tool$securityGetFirewallConfig);
  tool(tool$securityGetActiveAttackStatus);
  tool(tool$securityGetBypassIp);
  tool(tool$securityAddBypassIp);
  tool(tool$securityRemoveBypassIp);
  tool(tool$teamsGetTeamMembers);
  tool(tool$teamsInviteUserToTeam);
  tool(tool$teamsRequestAccessToTeam);
  tool(tool$teamsGetTeamAccessRequest);
  tool(tool$teamsJoinTeam);
  tool(tool$teamsUpdateTeamMember);
  tool(tool$teamsRemoveTeamMember);
  tool(tool$teamsGetTeam);
  tool(tool$teamsPatchTeam);
  tool(tool$teamsGetTeams);
  tool(tool$teamsCreateTeam);
  tool(tool$teamsDeleteTeam);
  tool(tool$teamsDeleteTeamInviteCode);
  tool(tool$webhooksCreateWebhook);
  tool(tool$webhooksGetWebhooks);
  tool(tool$webhooksGetWebhook);
  tool(tool$webhooksDeleteWebhook);
  tool(tool$aliasesListDeploymentAliases);
  tool(tool$aliasesAssignAlias);
  tool(tool$aliasesListAliases);
  tool(tool$aliasesGetAlias);
  tool(tool$aliasesDeleteAlias);
  tool(tool$aliasesPatchUrlProtectionBypass);
  tool(tool$certsGetCertById);
  tool(tool$certsRemoveCert);
  tool(tool$certsIssueCert);
  tool(tool$certsUploadCert);

  return server;
}
