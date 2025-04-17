// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package handler

import (
	"context"
	"mockserver/internal/logging"
	"mockserver/internal/tracking"
	"net/http"
)

// GeneratedHandlers returns all generated handlers.
func GeneratedHandlers(ctx context.Context, dir *logging.HTTPFileDirectory, rt *tracking.RequestTracker) []*GeneratedHandler {
	return []*GeneratedHandler{
		NewGeneratedHandler(ctx, http.MethodDelete, "/v1/access-groups/{accessGroupIdOrName}/projects/{projectId}", pathDeleteV1AccessGroupsAccessGroupIDOrNameProjectsProjectID(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodDelete, "/v1/access-groups/{idOrName}", pathDeleteV1AccessGroupsIDOrName(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodDelete, "/v1/edge-config/{edgeConfigId}", pathDeleteV1EdgeConfigEdgeConfigID(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodDelete, "/v1/edge-config/{edgeConfigId}/schema", pathDeleteV1EdgeConfigEdgeConfigIDSchema(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodDelete, "/v1/edge-config/{edgeConfigId}/tokens", pathDeleteV1EdgeConfigEdgeConfigIDTokens(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodDelete, "/v1/installations/{integrationConfigurationId}/resources/{resourceId}/experimentation/items/{itemId}", pathDeleteV1InstallationsIntegrationConfigurationIDResourcesResourceIDExperimentationItemsItemID(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodDelete, "/v1/integrations/configuration/{id}", pathDeleteV1IntegrationsConfigurationID(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodDelete, "/v1/integrations/log-drains/{id}", pathDeleteV1IntegrationsLogDrainsID(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodDelete, "/v1/log-drains/{id}", pathDeleteV1LogDrainsID(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodDelete, "/v1/projects/{idOrName}/members/{uid}", pathDeleteV1ProjectsIDOrNameMembersUID(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodDelete, "/v1/security/firewall/bypass", pathDeleteV1SecurityFirewallBypass(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodDelete, "/v1/teams/{teamId}", pathDeleteV1TeamsTeamID(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodDelete, "/v1/teams/{teamId}/invites/{inviteId}", pathDeleteV1TeamsTeamIDInvitesInviteID(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodDelete, "/v1/teams/{teamId}/members/{uid}", pathDeleteV1TeamsTeamIDMembersUID(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodDelete, "/v1/user", pathDeleteV1User(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodDelete, "/v1/webhooks/{id}", pathDeleteV1WebhooksID(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodDelete, "/v13/deployments/{id}", pathDeleteV13DeploymentsID(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodDelete, "/v2/aliases/{aliasId}", pathDeleteV2AliasesAliasID(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodDelete, "/v2/domains/{domain}/records/{recordId}", pathDeleteV2DomainsDomainRecordsRecordID(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodDelete, "/v3/user/tokens/{tokenId}", pathDeleteV3UserTokensTokenID(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodDelete, "/v6/domains/{domain}", pathDeleteV6DomainsDomain(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodDelete, "/v7/certs/{id}", pathDeleteV7CertsID(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodDelete, "/v9/projects/{idOrName}", pathDeleteV9ProjectsIDOrName(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodDelete, "/v9/projects/{idOrName}/custom-environments/{environmentSlugOrId}", pathDeleteV9ProjectsIDOrNameCustomEnvironmentsEnvironmentSlugOrID(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodDelete, "/v9/projects/{idOrName}/domains/{domain}", pathDeleteV9ProjectsIDOrNameDomainsDomain(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodDelete, "/v9/projects/{idOrName}/env/{id}", pathDeleteV9ProjectsIDOrNameEnvID(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodGet, "/v1/access-groups", pathGetV1AccessGroups(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodGet, "/v1/access-groups/{accessGroupIdOrName}/projects/{projectId}", pathGetV1AccessGroupsAccessGroupIDOrNameProjectsProjectID(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodGet, "/v1/access-groups/{idOrName}", pathGetV1AccessGroupsIDOrName(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodGet, "/v1/access-groups/{idOrName}/members", pathGetV1AccessGroupsIDOrNameMembers(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodGet, "/v1/access-groups/{idOrName}/projects", pathGetV1AccessGroupsIDOrNameProjects(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodGet, "/v1/deployments/{deploymentId}/checks", pathGetV1DeploymentsDeploymentIDChecks(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodGet, "/v1/deployments/{deploymentId}/checks/{checkId}", pathGetV1DeploymentsDeploymentIDChecksCheckID(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodGet, "/v1/domains/{domain}/registry", pathGetV1DomainsDomainRegistry(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodGet, "/v1/edge-config", pathGetV1EdgeConfig(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodGet, "/v1/edge-config/{edgeConfigId}", pathGetV1EdgeConfigEdgeConfigID(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodGet, "/v1/edge-config/{edgeConfigId}/backups", pathGetV1EdgeConfigEdgeConfigIDBackups(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodGet, "/v1/edge-config/{edgeConfigId}/item/{edgeConfigItemKey}", pathGetV1EdgeConfigEdgeConfigIDItemEdgeConfigItemKey(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodGet, "/v1/edge-config/{edgeConfigId}/items", pathGetV1EdgeConfigEdgeConfigIDItems(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodGet, "/v1/edge-config/{edgeConfigId}/schema", pathGetV1EdgeConfigEdgeConfigIDSchema(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodGet, "/v1/edge-config/{edgeConfigId}/token/{token}", pathGetV1EdgeConfigEdgeConfigIDTokenToken(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodGet, "/v1/edge-config/{edgeConfigId}/tokens", pathGetV1EdgeConfigEdgeConfigIDTokens(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodGet, "/v1/installations/{integrationConfigurationId}/account", pathGetV1InstallationsIntegrationConfigurationIDAccount(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodGet, "/v1/installations/{integrationConfigurationId}/billing/invoices/{invoiceId}", pathGetV1InstallationsIntegrationConfigurationIDBillingInvoicesInvoiceID(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodGet, "/v1/installations/{integrationConfigurationId}/member/{memberId}", pathGetV1InstallationsIntegrationConfigurationIDMemberMemberID(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodGet, "/v1/integrations/configuration/{id}", pathGetV1IntegrationsConfigurationID(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodGet, "/v1/projects/{idOrName}/env/{id}", pathGetV1ProjectsIDOrNameEnvID(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodGet, "/v1/projects/{projectId}/promote/aliases", pathGetV1ProjectsProjectIDPromoteAliases(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodGet, "/v1/security/firewall/attack-status", pathGetV1SecurityFirewallAttackStatus(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodGet, "/v1/security/firewall/bypass", pathGetV1SecurityFirewallBypass(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodGet, "/v1/security/firewall/config/{configVersion}", pathGetV1SecurityFirewallConfigConfigVersion(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodGet, "/v1/teams/{teamId}/request/{userId}", pathGetV1TeamsTeamIDRequestUserID(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodGet, "/v1/webhooks", pathGetV1Webhooks(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodGet, "/v1/webhooks/{id}", pathGetV1WebhooksID(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodGet, "/v10/projects", pathGetV10Projects(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodGet, "/v10/projects/{idOrName}/env", pathGetV10ProjectsIDOrNameEnv(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodGet, "/v13/deployments/{idOrUrl}", pathGetV13DeploymentsIDOrURL(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodGet, "/v2/deployments/{id}/aliases", pathGetV2DeploymentsIDAliases(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodGet, "/v2/integrations/log-drains", pathGetV2IntegrationsLogDrains(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodGet, "/v2/teams", pathGetV2Teams(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodGet, "/v2/teams/{teamId}", pathGetV2TeamsTeamID(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodGet, "/v3/deployments/{idOrUrl}/events", pathGetV3DeploymentsIDOrURLEvents(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodGet, "/v3/events", pathGetV3Events(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodGet, "/v4/aliases", pathGetV4Aliases(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodGet, "/v4/aliases/{idOrAlias}", pathGetV4AliasesIDOrAlias(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodGet, "/v4/domains/price", pathGetV4DomainsPrice(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodGet, "/v4/domains/status", pathGetV4DomainsStatus(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodGet, "/v5/domains", pathGetV5Domains(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodGet, "/v5/domains/{domain}", pathGetV5DomainsDomain(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodGet, "/v5/user/tokens", pathGetV5UserTokens(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodGet, "/v5/user/tokens/{tokenId}", pathGetV5UserTokensTokenID(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodGet, "/v6/deployments", pathGetV6Deployments(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodGet, "/v6/deployments/{id}/files", pathGetV6DeploymentsIDFiles(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodGet, "/v6/domains/{domain}/config", pathGetV6DomainsDomainConfig(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodGet, "/v7/certs/{id}", pathGetV7CertsID(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodGet, "/v7/deployments/{id}/files/{fileId}", pathGetV7DeploymentsIDFilesFileID(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodGet, "/v8/artifacts/status", pathGetV8ArtifactsStatus(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodGet, "/v8/artifacts/{hash}", pathGetV8ArtifactsHash(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodGet, "/v9/projects/{idOrName}/custom-environments", pathGetV9ProjectsIDOrNameCustomEnvironments(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodGet, "/v9/projects/{idOrName}/custom-environments/{environmentSlugOrId}", pathGetV9ProjectsIDOrNameCustomEnvironmentsEnvironmentSlugOrID(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodGet, "/v9/projects/{idOrName}/domains", pathGetV9ProjectsIDOrNameDomains(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodGet, "/v9/projects/{idOrName}/domains/{domain}", pathGetV9ProjectsIDOrNameDomainsDomain(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodHead, "/v1/installations/{integrationConfigurationId}/resources/{resourceId}/experimentation/edge-config", pathHeadV1InstallationsIntegrationConfigurationIDResourcesResourceIDExperimentationEdgeConfig(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodHead, "/v8/artifacts/{hash}", pathHeadV8ArtifactsHash(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodPatch, "/v1/access-groups/{accessGroupIdOrName}/projects/{projectId}", pathPatchV1AccessGroupsAccessGroupIDOrNameProjectsProjectID(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodPatch, "/v1/data-cache/projects/{projectId}", pathPatchV1DataCacheProjectsProjectID(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodPatch, "/v1/deployments/{deploymentId}/checks/{checkId}", pathPatchV1DeploymentsDeploymentIDChecksCheckID(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodPatch, "/v1/deployments/{deploymentId}/integrations/{integrationConfigurationId}/resources/{resourceId}/actions/{action}", pathPatchV1DeploymentsDeploymentIDIntegrationsIntegrationConfigurationIDResourcesResourceIDActionsAction(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodPatch, "/v1/domains/records/{recordId}", pathPatchV1DomainsRecordsRecordID(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodPatch, "/v1/installations/{integrationConfigurationId}/resources/{resourceId}/experimentation/items/{itemId}", pathPatchV1InstallationsIntegrationConfigurationIDResourcesResourceIDExperimentationItemsItemID(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodPatch, "/v1/projects/{idOrName}/protection-bypass", pathPatchV1ProjectsIDOrNameProtectionBypass(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodPatch, "/v1/security/firewall/config", pathPatchV1SecurityFirewallConfig(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodPatch, "/v1/teams/{teamId}/members/{uid}", pathPatchV1TeamsTeamIDMembersUID(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodPatch, "/v12/deployments/{id}/cancel", pathPatchV12DeploymentsIDCancel(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodPatch, "/v2/teams/{teamId}", pathPatchV2TeamsTeamID(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodPatch, "/v9/projects/{idOrName}", pathPatchV9ProjectsIDOrName(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodPatch, "/v9/projects/{idOrName}/custom-environments/{environmentSlugOrId}", pathPatchV9ProjectsIDOrNameCustomEnvironmentsEnvironmentSlugOrID(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodPatch, "/v9/projects/{idOrName}/domains/{domain}", pathPatchV9ProjectsIDOrNameDomainsDomain(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodPost, "/projects/{idOrName}/transfer-request", pathPostProjectsIDOrNameTransferRequest(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodPost, "/v1/access-groups", pathPostV1AccessGroups(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodPost, "/v1/access-groups/{accessGroupIdOrName}/projects", pathPostV1AccessGroupsAccessGroupIDOrNameProjects(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodPost, "/v1/access-groups/{idOrName}", pathPostV1AccessGroupsIDOrName(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodPost, "/v1/deployments/{deploymentId}/checks", pathPostV1DeploymentsDeploymentIDChecks(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodPost, "/v1/deployments/{deploymentId}/checks/{checkId}/rerequest", pathPostV1DeploymentsDeploymentIDChecksCheckIDRerequest(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodPost, "/v1/edge-config", pathPostV1EdgeConfig(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodPost, "/v1/edge-config/{edgeConfigId}/schema", pathPostV1EdgeConfigEdgeConfigIDSchema(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodPost, "/v1/edge-config/{edgeConfigId}/token", pathPostV1EdgeConfigEdgeConfigIDToken(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodPost, "/v1/installations/{integrationConfigurationId}/billing", pathPostV1InstallationsIntegrationConfigurationIDBilling(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodPost, "/v1/installations/{integrationConfigurationId}/billing/balance", pathPostV1InstallationsIntegrationConfigurationIDBillingBalance(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodPost, "/v1/installations/{integrationConfigurationId}/billing/invoices", pathPostV1InstallationsIntegrationConfigurationIDBillingInvoices(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodPost, "/v1/installations/{integrationConfigurationId}/billing/invoices/{invoiceId}/actions", pathPostV1InstallationsIntegrationConfigurationIDBillingInvoicesInvoiceIDActions(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodPost, "/v1/installations/{integrationConfigurationId}/events", pathPostV1InstallationsIntegrationConfigurationIDEvents(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodPost, "/v1/installations/{integrationConfigurationId}/resources/{resourceId}/experimentation/items", pathPostV1InstallationsIntegrationConfigurationIDResourcesResourceIDExperimentationItems(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodPost, "/v1/integrations/sso/token", pathPostV1IntegrationsSsoToken(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodPost, "/v1/projects/{idOrName}/members", pathPostV1ProjectsIDOrNameMembers(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodPost, "/v1/projects/{projectId}/pause", pathPostV1ProjectsProjectIDPause(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodPost, "/v1/projects/{projectId}/unpause", pathPostV1ProjectsProjectIDUnpause(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodPost, "/v1/security/attack-mode", pathPostV1SecurityAttackMode(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodPost, "/v1/security/firewall/bypass", pathPostV1SecurityFirewallBypass(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodPost, "/v1/teams", pathPostV1Teams(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodPost, "/v1/teams/{teamId}/members/teams/join", pathPostV1TeamsTeamIDMembersTeamsJoin(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodPost, "/v1/teams/{teamId}/request", pathPostV1TeamsTeamIDRequest(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodPost, "/v1/webhooks", pathPostV1Webhooks(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodPost, "/v10/projects/{idOrName}/domains", pathPostV10ProjectsIDOrNameDomains(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodPost, "/v10/projects/{idOrName}/env", pathPostV10ProjectsIDOrNameEnv(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodPost, "/v10/projects/{projectId}/promote/{deploymentId}", pathPostV10ProjectsProjectIDPromoteDeploymentID(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodPost, "/v11/projects", pathPostV11Projects(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodPost, "/v13/deployments", pathPostV13Deployments(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodPost, "/v2/deployments/{id}/aliases", pathPostV2DeploymentsIDAliases(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodPost, "/v2/domains/{domain}/records", pathPostV2DomainsDomainRecords(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodPost, "/v2/files", pathPostV2Files(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodPost, "/v2/integrations/log-drains", pathPostV2IntegrationsLogDrains(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodPost, "/v3/user/tokens", pathPostV3UserTokens(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodPost, "/v5/domains", pathPostV5Domains(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodPost, "/v5/domains/buy", pathPostV5DomainsBuy(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodPost, "/v7/certs", pathPostV7Certs(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodPost, "/v8/artifacts", pathPostV8Artifacts(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodPost, "/v8/artifacts/events", pathPostV8ArtifactsEvents(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodPost, "/v9/projects/{idOrName}/custom-environments", pathPostV9ProjectsIDOrNameCustomEnvironments(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodPost, "/v9/projects/{idOrName}/domains/{domain}/verify", pathPostV9ProjectsIDOrNameDomainsDomainVerify(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodPut, "/projects/transfer-request/{code}", pathPutProjectsTransferRequestCode(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodPut, "/v1/edge-config/{edgeConfigId}", pathPutV1EdgeConfigEdgeConfigID(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodPut, "/v1/installations/{integrationConfigurationId}/products/{integrationProductIdOrSlug}/resources/{resourceId}/secrets", pathPutV1InstallationsIntegrationConfigurationIDProductsIntegrationProductIDOrSlugResourcesResourceIDSecrets(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodPut, "/v1/installations/{integrationConfigurationId}/resources/{resourceId}", pathPutV1InstallationsIntegrationConfigurationIDResourcesResourceID(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodPut, "/v1/installations/{integrationConfigurationId}/resources/{resourceId}/experimentation/edge-config", pathPutV1InstallationsIntegrationConfigurationIDResourcesResourceIDExperimentationEdgeConfig(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodPut, "/v1/installations/{integrationConfigurationId}/resources/{resourceId}/secrets", pathPutV1InstallationsIntegrationConfigurationIDResourcesResourceIDSecrets(dir, rt)),
		NewGeneratedHandler(ctx, http.MethodPut, "/v7/certs", pathPutV7Certs(dir, rt)),
	}
}
