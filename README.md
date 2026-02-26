<p align="center">
  <a href="https://vercel.com">
    <img src="https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png" height="96">
    <h3 align="center">Vercel</h3>
  </a>
  <p align="center">Develop. Preview. Ship.</p>
</p>

[Join the Vercel Community](https://community.vercel.com/)

# @vercel/sdk

The `@vercel/sdk` is a type-safe Typescript SDK that gives you full control over the entire Vercel platform through the [Vercel REST API](https://vercel.com/docs/rest-api).

<div align="left">
    <a href="https://www.speakeasy.com/?utm_source=@vercel/sdk&utm_campaign=typescript"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>

<!-- No Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [@vercel/sdk](#vercelsdk)
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [Access Tokens](#access-tokens)
  * [Authentication](#authentication)
  * [SDK Example Usage](#sdk-example-usage)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Standalone functions](#standalone-functions)
  * [Json Streaming](#json-streaming)
  * [File uploads](#file-uploads)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
  * [Debugging](#debugging)
* [Development](#development)
  * [Maturity](#maturity)
  * [Contributions](#contributions)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add @vercel/sdk
```

### PNPM

```bash
pnpm add @vercel/sdk
```

### Bun

```bash
bun add @vercel/sdk
```

### Yarn

```bash
yarn add @vercel/sdk
```

> [!NOTE]
> This package is published as an ES Module (ESM) only. For applications using
> CommonJS, use `await import("@vercel/sdk")` to import and use this package.

### Model Context Protocol (MCP) Server

This SDK is also an installable MCP server where the various SDK methods are
exposed as tools that can be invoked by AI applications.

> Node.js v20 or greater is required to run the MCP server from npm.

<details>
<summary>Claude installation steps</summary>

Add the following server definition to your `claude_desktop_config.json` file:

```json
{
  "mcpServers": {
    "Vercel": {
      "command": "npx",
      "args": [
        "-y", "--package", "@vercel/sdk",
        "--",
        "mcp", "start",
        "--bearer-token", "..."
      ]
    }
  }
}
```

</details>

<details>
<summary>Cursor installation steps</summary>

Create a `.cursor/mcp.json` file in your project root with the following content:

```json
{
  "mcpServers": {
    "Vercel": {
      "command": "npx",
      "args": [
        "-y", "--package", "@vercel/sdk",
        "--",
        "mcp", "start",
        "--bearer-token", "..."
      ]
    }
  }
}
```

</details>

You can also run MCP servers as a standalone binary with no additional dependencies. You must pull these binaries from available Github releases:

```bash
curl -L -o mcp-server \
    https://github.com/{org}/{repo}/releases/download/{tag}/mcp-server-bun-darwin-arm64 && \
chmod +x mcp-server
```

If the repo is a private repo you must add your Github PAT to download a release `-H "Authorization: Bearer {GITHUB_PAT}"`.


```json
{
  "mcpServers": {
    "Todos": {
      "command": "./DOWNLOAD/PATH/mcp-server",
      "args": [
        "start"
      ]
    }
  }
}
```

For a full list of server arguments, run:

```sh
npx -y --package @vercel/sdk -- mcp start --help
```
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

## Access Tokens

You need to pass a valid access token to be able to use any resource or operation. Refer to [Creating an Access Token](https://vercel.com/docs/rest-api#authentication) to learn how to create one. Make sure that you create a token with the correct Vercel [scope](https://vercel.com/docs/dashboard-features#scope-selector). 
If you face permission (403) errors when you are already sending a token, it can be one of the following problems:
- The token you are using has expired. Check the expiry date of the token in the Vercel dashboard.
- The token does not have access to the correct scope, either not the right team or it does not have account level access.
- The resource or operation you are trying to use is not available for that team. For example, AccessGroups is an Enterprise only feature and you are using a token for a team on the pro plan.

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name          | Type | Scheme      |
| ------------- | ---- | ----------- |
| `bearerToken` | http | HTTP Bearer |

To authenticate with the API the `bearerToken` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.accessGroups.readAccessGroup({
    idOrName: "ag_1a2b3c4d5e6f7g8h9i0j",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
  });

  console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### List deployments

List deployments under the authenticated user or team.

```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.deployments.getDeployments({
    app: "docs",
    from: 1612948664566,
    limit: 10,
    projectId: "QmXGTs7mvAMMC7WW5ebrM33qKG32QK3h4vmQMjmY",
    projectIds: [
      "prj_123",
      "prj_456",
    ],
    target: "production",
    to: 1612948664566,
    users: "kr1PsOIzqEL5Xg6M4VZcZosf,K4amb7K9dAt5R2vBJWF32bmY",
    since: 1540095775941,
    until: 1540095775951,
    state: "BUILDING,READY",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
  });

  console.log(result);
}

run();

```

### Update an existing project

Update the fields of a project using either its name or id.

```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.projects.updateProject({
    idOrName: "prj_12HKQaOmR5t5Uy6vdcQsNIiZgHGB",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
    requestBody: {
      name: "a-project-name",
    },
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [AccessGroups](docs/sdks/accessgroups/README.md)

* [readAccessGroup](docs/sdks/accessgroups/README.md#readaccessgroup) - Reads an access group
* [updateAccessGroup](docs/sdks/accessgroups/README.md#updateaccessgroup) - Update an access group
* [deleteAccessGroup](docs/sdks/accessgroups/README.md#deleteaccessgroup) - Deletes an access group
* [listAccessGroupMembers](docs/sdks/accessgroups/README.md#listaccessgroupmembers) - List members of an access group
* [listAccessGroups](docs/sdks/accessgroups/README.md#listaccessgroups) - List access groups for a team, project or member
* [createAccessGroup](docs/sdks/accessgroups/README.md#createaccessgroup) - Creates an access group
* [listAccessGroupProjects](docs/sdks/accessgroups/README.md#listaccessgroupprojects) - List projects of an access group
* [createAccessGroupProject](docs/sdks/accessgroups/README.md#createaccessgroupproject) - Create an access group project
* [readAccessGroupProject](docs/sdks/accessgroups/README.md#readaccessgroupproject) - Reads an access group project
* [updateAccessGroupProject](docs/sdks/accessgroups/README.md#updateaccessgroupproject) - Update an access group project
* [deleteAccessGroupProject](docs/sdks/accessgroups/README.md#deleteaccessgroupproject) - Delete an access group project

### [Aliases](docs/sdks/aliases/README.md)

* [listDeploymentAliases](docs/sdks/aliases/README.md#listdeploymentaliases) - List Deployment Aliases
* [assignAlias](docs/sdks/aliases/README.md#assignalias) - Assign an Alias
* [listAliases](docs/sdks/aliases/README.md#listaliases) - List aliases
* [getAlias](docs/sdks/aliases/README.md#getalias) - Get an Alias
* [deleteAlias](docs/sdks/aliases/README.md#deletealias) - Delete an Alias
* [patchUrlProtectionBypass](docs/sdks/aliases/README.md#patchurlprotectionbypass) - Update the protection bypass for a URL

### [Artifacts](docs/sdks/artifacts/README.md)

* [recordEvents](docs/sdks/artifacts/README.md#recordevents) - Record an artifacts cache usage event
* [status](docs/sdks/artifacts/README.md#status) - Get status of Remote Caching for this principal
* [uploadArtifact](docs/sdks/artifacts/README.md#uploadartifact) - Upload a cache artifact
* [downloadArtifact](docs/sdks/artifacts/README.md#downloadartifact) - Download a cache artifact
* [artifactExists](docs/sdks/artifacts/README.md#artifactexists) - Check if a cache artifact exists
* [artifactQuery](docs/sdks/artifacts/README.md#artifactquery) - Query information about an artifact

### [Authentication](docs/sdks/authentication/README.md)

* [exchangeSsoToken](docs/sdks/authentication/README.md#exchangessotoken) - SSO Token Exchange
* [listAuthTokens](docs/sdks/authentication/README.md#listauthtokens) - List Auth Tokens
* [createAuthToken](docs/sdks/authentication/README.md#createauthtoken) - Create an Auth Token
* [getAuthToken](docs/sdks/authentication/README.md#getauthtoken) - Get Auth Token Metadata
* [deleteAuthToken](docs/sdks/authentication/README.md#deleteauthtoken) - Delete an authentication token

### [Billing](docs/sdks/billing/README.md)

* [listBillingCharges](docs/sdks/billing/README.md#listbillingcharges) - List FOCUS billing charges
* [listContractCommitments](docs/sdks/billing/README.md#listcontractcommitments) - List FOCUS contract commitments

### [BulkRedirects](docs/sdks/bulkredirects/README.md)

* [stageRedirects](docs/sdks/bulkredirects/README.md#stageredirects) - Stages new redirects for a project.
* [getRedirects](docs/sdks/bulkredirects/README.md#getredirects) - Gets project-level redirects.
* [deleteRedirects](docs/sdks/bulkredirects/README.md#deleteredirects) - Delete project-level redirects.
* [editRedirect](docs/sdks/bulkredirects/README.md#editredirect) - Edit a project-level redirect.
* [restoreRedirects](docs/sdks/bulkredirects/README.md#restoreredirects) - Restore staged project-level redirects to their production version.
* [getVersions](docs/sdks/bulkredirects/README.md#getversions) - Get the version history for a project's redirects.
* [updateVersion](docs/sdks/bulkredirects/README.md#updateversion) - Promote a staging version to production or restore a previous production version.

### [Certs](docs/sdks/certs/README.md)

* [getCertById](docs/sdks/certs/README.md#getcertbyid) - Get cert by id
* [removeCert](docs/sdks/certs/README.md#removecert) - Remove cert
* [issueCert](docs/sdks/certs/README.md#issuecert) - Issue a new cert
* [uploadCert](docs/sdks/certs/README.md#uploadcert) - Upload a cert

### [Checks](docs/sdks/checks/README.md)

* [createCheck](docs/sdks/checks/README.md#createcheck) - Creates a new Check
* [getAllChecks](docs/sdks/checks/README.md#getallchecks) - Retrieve a list of all checks
* [getCheck](docs/sdks/checks/README.md#getcheck) - Get a single check
* [updateCheck](docs/sdks/checks/README.md#updatecheck) - Update a check
* [rerequestCheck](docs/sdks/checks/README.md#rerequestcheck) - Rerequest a check

### [ChecksV2](docs/sdks/checksv2/README.md)

* [listProjectChecks](docs/sdks/checksv2/README.md#listprojectchecks) - List all checks for a project
* [createProjectCheck](docs/sdks/checksv2/README.md#createprojectcheck) - Create a check
* [getProjectCheck](docs/sdks/checksv2/README.md#getprojectcheck) - Get a check
* [updateProjectCheck](docs/sdks/checksv2/README.md#updateprojectcheck) - Update a check
* [deleteProjectCheck](docs/sdks/checksv2/README.md#deleteprojectcheck) - Delete a check
* [listCheckRuns](docs/sdks/checksv2/README.md#listcheckruns) - List runs for a check
* [listDeploymentCheckRuns](docs/sdks/checksv2/README.md#listdeploymentcheckruns) - List check runs for a deployment
* [createDeploymentCheckRun](docs/sdks/checksv2/README.md#createdeploymentcheckrun) - Create a check run
* [getDeploymentCheckRun](docs/sdks/checksv2/README.md#getdeploymentcheckrun) - Get a check run
* [updateDeploymentCheckRun](docs/sdks/checksv2/README.md#updatedeploymentcheckrun) - Update a check run

### [Connect](docs/sdks/connect/README.md)

* [listNetworks](docs/sdks/connect/README.md#listnetworks) - List Secure Compute networks
* [createNetwork](docs/sdks/connect/README.md#createnetwork) - Create a Secure Compute network
* [deleteNetwork](docs/sdks/connect/README.md#deletenetwork) - Delete a Secure Compute network
* [updateNetwork](docs/sdks/connect/README.md#updatenetwork) - Update a Secure Compute network
* [readNetwork](docs/sdks/connect/README.md#readnetwork) - Read a Secure Compute network
* [updateStaticIps](docs/sdks/connect/README.md#updatestaticips) - Configures Static IPs for a project

### [Deployments](docs/sdks/deployments/README.md)

* [getDeploymentEvents](docs/sdks/deployments/README.md#getdeploymentevents) - Get deployment events
* [updateIntegrationDeploymentAction](docs/sdks/deployments/README.md#updateintegrationdeploymentaction) - Update deployment integration action
* [getDeployment](docs/sdks/deployments/README.md#getdeployment) - Get a deployment by ID or URL
* [createDeployment](docs/sdks/deployments/README.md#createdeployment) - Create a new deployment
* [cancelDeployment](docs/sdks/deployments/README.md#canceldeployment) - Cancel a deployment
* [uploadFile](docs/sdks/deployments/README.md#uploadfile) - Upload Deployment Files
* [listDeploymentFiles](docs/sdks/deployments/README.md#listdeploymentfiles) - List Deployment Files
* [getDeploymentFileContents](docs/sdks/deployments/README.md#getdeploymentfilecontents) - Get Deployment File Contents
* [getDeployments](docs/sdks/deployments/README.md#getdeployments) - List deployments
* [deleteDeployment](docs/sdks/deployments/README.md#deletedeployment) - Delete a Deployment

### [Dns](docs/sdks/dns/README.md)

* [getRecords](docs/sdks/dns/README.md#getrecords) - List existing DNS records
* [createRecord](docs/sdks/dns/README.md#createrecord) - Create a DNS record
* [updateRecord](docs/sdks/dns/README.md#updaterecord) - Update an existing DNS record
* [removeRecord](docs/sdks/dns/README.md#removerecord) - Delete a DNS record

### [Domains](docs/sdks/domains/README.md)

* [getDomainConfig](docs/sdks/domains/README.md#getdomainconfig) - Get a Domain's configuration
* [getDomain](docs/sdks/domains/README.md#getdomain) - Get Information for a Single Domain
* [getDomains](docs/sdks/domains/README.md#getdomains) - List all the domains
* [createOrTransferDomain](docs/sdks/domains/README.md#createortransferdomain) - Add an existing domain to the Vercel platform
* [patchDomain](docs/sdks/domains/README.md#patchdomain) - Update or move apex domain
* [deleteDomain](docs/sdks/domains/README.md#deletedomain) - Remove a domain by name

### [DomainsRegistrar](docs/sdks/domainsregistrar/README.md)

* [getSupportedTlds](docs/sdks/domainsregistrar/README.md#getsupportedtlds) - Get supported TLDs
* [getTld](docs/sdks/domainsregistrar/README.md#gettld) - Get TLD
* [getTldPrice](docs/sdks/domainsregistrar/README.md#gettldprice) - Get TLD price data
* [getDomainAvailability](docs/sdks/domainsregistrar/README.md#getdomainavailability) - Get availability for a domain
* [getDomainPrice](docs/sdks/domainsregistrar/README.md#getdomainprice) - Get price data for a domain
* [getBulkAvailability](docs/sdks/domainsregistrar/README.md#getbulkavailability) - Get availability for multiple domains
* [getDomainAuthCode](docs/sdks/domainsregistrar/README.md#getdomainauthcode) - Get the auth code for a domain
* [buySingleDomain](docs/sdks/domainsregistrar/README.md#buysingledomain) - Buy a domain
* [buyDomains](docs/sdks/domainsregistrar/README.md#buydomains) - Buy multiple domains
* [transferInDomain](docs/sdks/domainsregistrar/README.md#transferindomain) - Transfer-in a domain
* [getDomainTransferIn](docs/sdks/domainsregistrar/README.md#getdomaintransferin) - Get a domain's transfer status
* [renewDomain](docs/sdks/domainsregistrar/README.md#renewdomain) - Renew a domain
* [updateDomainAutoRenew](docs/sdks/domainsregistrar/README.md#updatedomainautorenew) - Update auto-renew for a domain
* [updateDomainNameservers](docs/sdks/domainsregistrar/README.md#updatedomainnameservers) - Update nameservers for a domain
* [getContactInfoSchema](docs/sdks/domainsregistrar/README.md#getcontactinfoschema) - Get contact info schema
* [getOrder](docs/sdks/domainsregistrar/README.md#getorder) - Get a domain order

### [Drains](docs/sdks/drains/README.md)

* [createDrain](docs/sdks/drains/README.md#createdrain) - Create a new Drain
* [getDrains](docs/sdks/drains/README.md#getdrains) - Retrieve a list of all Drains
* [deleteDrain](docs/sdks/drains/README.md#deletedrain) - Delete a drain
* [getDrain](docs/sdks/drains/README.md#getdrain) - Find a Drain by id
* [updateDrain](docs/sdks/drains/README.md#updatedrain) - Update an existing Drain
* [testDrain](docs/sdks/drains/README.md#testdrain) - Validate Drain delivery configuration

### [EdgeCache](docs/sdks/edgecache/README.md)

* [invalidateByTags](docs/sdks/edgecache/README.md#invalidatebytags) - Invalidate by tag
* [dangerouslyDeleteByTags](docs/sdks/edgecache/README.md#dangerouslydeletebytags) - Dangerously delete by tag
* [invalidateBySrcImages](docs/sdks/edgecache/README.md#invalidatebysrcimages) - Invalidate by source image
* [dangerouslyDeleteBySrcImages](docs/sdks/edgecache/README.md#dangerouslydeletebysrcimages) - Dangerously delete by source image

### [EdgeConfig](docs/sdks/edgeconfig/README.md)

* [getEdgeConfigs](docs/sdks/edgeconfig/README.md#getedgeconfigs) - Get Edge Configs
* [createEdgeConfig](docs/sdks/edgeconfig/README.md#createedgeconfig) - Create an Edge Config
* [getEdgeConfig](docs/sdks/edgeconfig/README.md#getedgeconfig) - Get an Edge Config
* [updateEdgeConfig](docs/sdks/edgeconfig/README.md#updateedgeconfig) - Update an Edge Config
* [deleteEdgeConfig](docs/sdks/edgeconfig/README.md#deleteedgeconfig) - Delete an Edge Config
* [getEdgeConfigItems](docs/sdks/edgeconfig/README.md#getedgeconfigitems) - Get Edge Config items
* [patchEdgeConfigItems](docs/sdks/edgeconfig/README.md#patchedgeconfigitems) - Update Edge Config items in batch
* [getEdgeConfigSchema](docs/sdks/edgeconfig/README.md#getedgeconfigschema) - Get Edge Config schema
* [patchEdgeConfigSchema](docs/sdks/edgeconfig/README.md#patchedgeconfigschema) - Update Edge Config schema
* [deleteEdgeConfigSchema](docs/sdks/edgeconfig/README.md#deleteedgeconfigschema) - Delete an Edge Config's schema
* [getEdgeConfigItem](docs/sdks/edgeconfig/README.md#getedgeconfigitem) - Get an Edge Config item
* [getEdgeConfigTokens](docs/sdks/edgeconfig/README.md#getedgeconfigtokens) - Get all tokens of an Edge Config
* [deleteEdgeConfigTokens](docs/sdks/edgeconfig/README.md#deleteedgeconfigtokens) - Delete one or more Edge Config tokens
* [getEdgeConfigToken](docs/sdks/edgeconfig/README.md#getedgeconfigtoken) - Get Edge Config token meta data
* [createEdgeConfigToken](docs/sdks/edgeconfig/README.md#createedgeconfigtoken) - Create an Edge Config token
* [getEdgeConfigBackup](docs/sdks/edgeconfig/README.md#getedgeconfigbackup) - Get Edge Config backup
* [getEdgeConfigBackups](docs/sdks/edgeconfig/README.md#getedgeconfigbackups) - Get Edge Config backups

### [Environment](docs/sdks/environment/README.md)

* [createSharedEnvVariable](docs/sdks/environment/README.md#createsharedenvvariable) - Create one or more shared environment variables
* [listSharedEnvVariable](docs/sdks/environment/README.md#listsharedenvvariable) - Lists all Shared Environment Variables for a team
* [updateSharedEnvVariable](docs/sdks/environment/README.md#updatesharedenvvariable) - Updates one or more shared environment variables
* [deleteSharedEnvVariable](docs/sdks/environment/README.md#deletesharedenvvariable) - Delete one or more Env Var
* [getSharedEnvVar](docs/sdks/environment/README.md#getsharedenvvar) - Retrieve the decrypted value of a Shared Environment Variable by id.
* [unlinkSharedEnvVariable](docs/sdks/environment/README.md#unlinksharedenvvariable) - Disconnects a shared environment variable for a given project
* [createCustomEnvironment](docs/sdks/environment/README.md#createcustomenvironment) - Create a custom environment for the current project.
* [getV9ProjectsIdOrNameCustomEnvironments](docs/sdks/environment/README.md#getv9projectsidornamecustomenvironments) - Retrieve custom environments
* [getCustomEnvironment](docs/sdks/environment/README.md#getcustomenvironment) - Retrieve a custom environment
* [updateCustomEnvironment](docs/sdks/environment/README.md#updatecustomenvironment) - Update a custom environment
* [removeCustomEnvironment](docs/sdks/environment/README.md#removecustomenvironment) - Remove a custom environment

### [FeatureFlags](docs/sdks/featureflags/README.md)

* [listFlags](docs/sdks/featureflags/README.md#listflags) - List flags
* [createFlag](docs/sdks/featureflags/README.md#createflag) - Create a flag
* [getFlag](docs/sdks/featureflags/README.md#getflag) - Get a flag
* [updateFlag](docs/sdks/featureflags/README.md#updateflag) - Update a flag
* [deleteFlag](docs/sdks/featureflags/README.md#deleteflag) - Delete a flag
* [listFlagVersions](docs/sdks/featureflags/README.md#listflagversions) - List flag versions
* [getFlagSettings](docs/sdks/featureflags/README.md#getflagsettings) - Get project flag settings
* [updateFlagSettings](docs/sdks/featureflags/README.md#updateflagsettings) - Update project flag settings
* [listTeamFlagSettings](docs/sdks/featureflags/README.md#listteamflagsettings) - List team project flag settings
* [listTeamFlags](docs/sdks/featureflags/README.md#listteamflags) - List all flags for a team
* [createFlagSegment](docs/sdks/featureflags/README.md#createflagsegment) - Create a segment
* [listFlagSegments](docs/sdks/featureflags/README.md#listflagsegments) - List segments
* [getFlagSegment](docs/sdks/featureflags/README.md#getflagsegment) - Get a segment
* [deleteFlagSegment](docs/sdks/featureflags/README.md#deleteflagsegment) - Delete a segment
* [updateFlagSegment](docs/sdks/featureflags/README.md#updateflagsegment) - Update a segment
* [getDeploymentFeatureFlags](docs/sdks/featureflags/README.md#getdeploymentfeatureflags) - Retrieve the feature flags of a deployment
* [getSDKKeys](docs/sdks/featureflags/README.md#getsdkkeys) - Get all SDK keys
* [createSDKKey](docs/sdks/featureflags/README.md#createsdkkey) - Create an SDK key
* [deleteSDKKey](docs/sdks/featureflags/README.md#deletesdkkey) - Delete an SDK key

### [Integrations](docs/sdks/integrations/README.md)

* [updateIntegrationDeploymentAction](docs/sdks/integrations/README.md#updateintegrationdeploymentaction) - Update deployment integration action
* [gitNamespaces](docs/sdks/integrations/README.md#gitnamespaces) - List git namespaces by provider
* [searchRepo](docs/sdks/integrations/README.md#searchrepo) - List git repositories linked to namespace by provider
* [getBillingPlans](docs/sdks/integrations/README.md#getbillingplans) - List integration billing plans
* [connectIntegrationResourceToProject](docs/sdks/integrations/README.md#connectintegrationresourcetoproject) - Connect integration resource to project
* [getConfigurations](docs/sdks/integrations/README.md#getconfigurations) - Get configurations for the authenticated user or team
* [getConfiguration](docs/sdks/integrations/README.md#getconfiguration) - Retrieve an integration configuration
* [deleteConfiguration](docs/sdks/integrations/README.md#deleteconfiguration) - Delete an integration configuration
* [getConfigurationProducts](docs/sdks/integrations/README.md#getconfigurationproducts) - List products for integration configuration
* [createIntegrationStoreDirect](docs/sdks/integrations/README.md#createintegrationstoredirect) - Create integration store (free and paid plans)

### [LogDrains](docs/sdks/logdrains/README.md)

* [getConfigurableLogDrain](docs/sdks/logdrains/README.md#getconfigurablelogdrain) - Retrieves a Configurable Log Drain (deprecated)
* [deleteConfigurableLogDrain](docs/sdks/logdrains/README.md#deleteconfigurablelogdrain) - Deletes a Configurable Log Drain (deprecated)
* [getAllLogDrains](docs/sdks/logdrains/README.md#getalllogdrains) - Retrieves a list of all the Log Drains (deprecated)
* [createConfigurableLogDrain](docs/sdks/logdrains/README.md#createconfigurablelogdrain) - Creates a Configurable Log Drain (deprecated)
* [getIntegrationLogDrains](docs/sdks/logdrains/README.md#getintegrationlogdrains) - Retrieves a list of Integration log drains (deprecated)
* [createLogDrain](docs/sdks/logdrains/README.md#createlogdrain) - Creates a new Integration Log Drain (deprecated)
* [deleteIntegrationLogDrain](docs/sdks/logdrains/README.md#deleteintegrationlogdrain) - Deletes the Integration log drain with the provided `id` (deprecated)

### [Logs](docs/sdks/logs/README.md)

* [getRuntimeLogs](docs/sdks/logs/README.md#getruntimelogs) - Get logs for a deployment

### [Marketplace](docs/sdks/marketplace/README.md)

* [updateInstallation](docs/sdks/marketplace/README.md#updateinstallation) - Update Installation
* [getAccountInfo](docs/sdks/marketplace/README.md#getaccountinfo) - Get Account Information
* [getMember](docs/sdks/marketplace/README.md#getmember) - Get Member Information
* [createEvent](docs/sdks/marketplace/README.md#createevent) - Create Event
* [getIntegrationResources](docs/sdks/marketplace/README.md#getintegrationresources) - Get Integration Resources
* [getIntegrationResource](docs/sdks/marketplace/README.md#getintegrationresource) - Get Integration Resource
* [deleteIntegrationResource](docs/sdks/marketplace/README.md#deleteintegrationresource) - Delete Integration Resource
* [importResource](docs/sdks/marketplace/README.md#importresource) - Import Resource
* [updateResource](docs/sdks/marketplace/README.md#updateresource) - Update Resource
* [submitBillingData](docs/sdks/marketplace/README.md#submitbillingdata) - Submit Billing Data
* [submitInvoice](docs/sdks/marketplace/README.md#submitinvoice) - Submit Invoice
* [finalizeInstallation](docs/sdks/marketplace/README.md#finalizeinstallation) - Finalize Installation
* [getInvoice](docs/sdks/marketplace/README.md#getinvoice) - Get Invoice
* [updateInvoice](docs/sdks/marketplace/README.md#updateinvoice) - Invoice Actions
* [submitPrepaymentBalances](docs/sdks/marketplace/README.md#submitprepaymentbalances) - Submit Prepayment Balances
* [updateResourceSecrets](docs/sdks/marketplace/README.md#updateresourcesecrets) - Update Resource Secrets (Deprecated)
* [updateResourceSecretsById](docs/sdks/marketplace/README.md#updateresourcesecretsbyid) - Update Resource Secrets
* [exchangeSsoToken](docs/sdks/marketplace/README.md#exchangessotoken) - SSO Token Exchange
* [createInstallationIntegrationConfiguration](docs/sdks/marketplace/README.md#createinstallationintegrationconfiguration) - Create one or multiple experimentation items
* [updateInstallationIntegrationConfiguration](docs/sdks/marketplace/README.md#updateinstallationintegrationconfiguration) - Patch an existing experimentation item
* [deleteInstallationIntegrationConfiguration](docs/sdks/marketplace/README.md#deleteinstallationintegrationconfiguration) - Delete an existing experimentation item
* [createInstallationIntegrationEdgeConfig](docs/sdks/marketplace/README.md#createinstallationintegrationedgeconfig) - Get the data of a user-provided Edge Config
* [getV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfig](docs/sdks/marketplace/README.md#getv1installationsintegrationconfigurationidresourcesresourceidexperimentationedgeconfig) - Get the data of a user-provided Edge Config
* [updateInstallationIntegrationEdgeConfig](docs/sdks/marketplace/README.md#updateinstallationintegrationedgeconfig) - Push data into a user-provided Edge Config

### [ProjectMembers](docs/sdks/projectmembers/README.md)

* [getProjectMembers](docs/sdks/projectmembers/README.md#getprojectmembers) - List project members
* [addProjectMember](docs/sdks/projectmembers/README.md#addprojectmember) - Adds a new member to a project.
* [removeProjectMember](docs/sdks/projectmembers/README.md#removeprojectmember) - Remove a Project Member

### [Projects](docs/sdks/projects/README.md)

* [getProjects](docs/sdks/projects/README.md#getprojects) - Retrieve a list of projects
* [createProject](docs/sdks/projects/README.md#createproject) - Create a new project
* [updateProject](docs/sdks/projects/README.md#updateproject) - Update an existing project
* [deleteProject](docs/sdks/projects/README.md#deleteproject) - Delete a Project
* [getProjectDomains](docs/sdks/projects/README.md#getprojectdomains) - Retrieve project domains by project by id or name
* [getProjectDomain](docs/sdks/projects/README.md#getprojectdomain) - Get a project domain
* [updateProjectDomain](docs/sdks/projects/README.md#updateprojectdomain) - Update a project domain
* [removeProjectDomain](docs/sdks/projects/README.md#removeprojectdomain) - Remove a domain from a project
* [addProjectDomain](docs/sdks/projects/README.md#addprojectdomain) - Add a domain to a project
* [moveProjectDomain](docs/sdks/projects/README.md#moveprojectdomain) - Move a project domain
* [verifyProjectDomain](docs/sdks/projects/README.md#verifyprojectdomain) - Verify project domain
* [filterProjectEnvs](docs/sdks/projects/README.md#filterprojectenvs) - Retrieve the environment variables of a project by id or name
* [createProjectEnv](docs/sdks/projects/README.md#createprojectenv) - Create one or more environment variables
* [getProjectEnv](docs/sdks/projects/README.md#getprojectenv) - Retrieve the decrypted value of an environment variable of a project by id
* [removeProjectEnv](docs/sdks/projects/README.md#removeprojectenv) - Remove an environment variable
* [editProjectEnv](docs/sdks/projects/README.md#editprojectenv) - Edit an environment variable
* [batchRemoveProjectEnv](docs/sdks/projects/README.md#batchremoveprojectenv) - Batch remove environment variables
* [createProjectTransferRequest](docs/sdks/projects/README.md#createprojecttransferrequest) - Create project transfer request
* [acceptProjectTransferRequest](docs/sdks/projects/README.md#acceptprojecttransferrequest) - Accept project transfer request
* [updateProjectProtectionBypass](docs/sdks/projects/README.md#updateprojectprotectionbypass) - Update Protection Bypass for Automation
* [requestRollback](docs/sdks/projects/README.md#requestrollback) - Points all production domains for a project to the given deploy
* [patchV1ProjectsProjectIdRollbackDeploymentIdUpdateDescription](docs/sdks/projects/README.md#patchv1projectsprojectidrollbackdeploymentidupdatedescription) - Updates the description for a rollback
* [requestPromote](docs/sdks/projects/README.md#requestpromote) - Points all production domains for a project to the given deploy
* [listPromoteAliases](docs/sdks/projects/README.md#listpromotealiases) - Gets a list of aliases with status for the current promote
* [pauseProject](docs/sdks/projects/README.md#pauseproject) - Pause a project
* [unpauseProject](docs/sdks/projects/README.md#unpauseproject) - Unpause a project

### [RollingRelease](docs/sdks/rollingrelease/README.md)

* [getRollingReleaseBillingStatus](docs/sdks/rollingrelease/README.md#getrollingreleasebillingstatus) - Get rolling release billing status
* [getRollingReleaseConfig](docs/sdks/rollingrelease/README.md#getrollingreleaseconfig) - Get rolling release configuration
* [deleteRollingReleaseConfig](docs/sdks/rollingrelease/README.md#deleterollingreleaseconfig) - Delete rolling release configuration
* [updateRollingReleaseConfig](docs/sdks/rollingrelease/README.md#updaterollingreleaseconfig) - Update the rolling release settings for the project
* [getRollingRelease](docs/sdks/rollingrelease/README.md#getrollingrelease) - Get the active rolling release information for a project
* [approveRollingReleaseStage](docs/sdks/rollingrelease/README.md#approverollingreleasestage) - Update the active rolling release to the next stage for a project
* [completeRollingRelease](docs/sdks/rollingrelease/README.md#completerollingrelease) - Complete the rolling release for the project

### [Sandboxes](docs/sdks/sandboxes/README.md)

* [listSandboxes](docs/sdks/sandboxes/README.md#listsandboxes) - List sandboxes
* [listSnapshots](docs/sdks/sandboxes/README.md#listsnapshots) - List snapshots
* [getSandbox](docs/sdks/sandboxes/README.md#getsandbox) - Get a sandbox
* [listCommands](docs/sdks/sandboxes/README.md#listcommands) - List commands
* [runCommand](docs/sdks/sandboxes/README.md#runcommand) - Execute a command
* [killCommand](docs/sdks/sandboxes/README.md#killcommand) - Kill a command
* [stopSandbox](docs/sdks/sandboxes/README.md#stopsandbox) - Stop a sandbox
* [extendSandboxTimeout](docs/sdks/sandboxes/README.md#extendsandboxtimeout) - Extend sandbox timeout
* [updateNetworkPolicy](docs/sdks/sandboxes/README.md#updatenetworkpolicy) - Update network policy
* [getCommand](docs/sdks/sandboxes/README.md#getcommand) - Get a command
* [getCommandLogs](docs/sdks/sandboxes/README.md#getcommandlogs) - Stream command logs
* [readFile](docs/sdks/sandboxes/README.md#readfile) - Read a file
* [createDirectory](docs/sdks/sandboxes/README.md#createdirectory) - Create a directory
* [writeFiles](docs/sdks/sandboxes/README.md#writefiles) - Write files
* [getSnapshot](docs/sdks/sandboxes/README.md#getsnapshot) - Get a snapshot
* [deleteSnapshot](docs/sdks/sandboxes/README.md#deletesnapshot) - Delete a snapshot
* [createSnapshot](docs/sdks/sandboxes/README.md#createsnapshot) - Create a snapshot

### [Security](docs/sdks/security/README.md)

* [updateAttackChallengeMode](docs/sdks/security/README.md#updateattackchallengemode) - Update Attack Challenge mode
* [putFirewallConfig](docs/sdks/security/README.md#putfirewallconfig) - Put Firewall Configuration
* [updateFirewallConfig](docs/sdks/security/README.md#updatefirewallconfig) - Update Firewall Configuration
* [getFirewallConfig](docs/sdks/security/README.md#getfirewallconfig) - Read Firewall Configuration
* [getActiveAttackStatus](docs/sdks/security/README.md#getactiveattackstatus) - Read active attack data
* [getBypassIp](docs/sdks/security/README.md#getbypassip) - Read System Bypass
* [addBypassIp](docs/sdks/security/README.md#addbypassip) - Create System Bypass Rule
* [removeBypassIp](docs/sdks/security/README.md#removebypassip) - Remove System Bypass Rule
* [getV1SecurityFirewallEvents](docs/sdks/security/README.md#getv1securityfirewallevents) - Read Firewall Actions by Project

### [StaticIps](docs/sdks/staticips/README.md)

* [updateStaticIps](docs/sdks/staticips/README.md#updatestaticips) - Configures Static IPs for a project

### [Teams](docs/sdks/teams/README.md)

* [getTeamMembers](docs/sdks/teams/README.md#getteammembers) - List team members
* [inviteUserToTeam](docs/sdks/teams/README.md#inviteusertoteam) - Invite a user
* [requestAccessToTeam](docs/sdks/teams/README.md#requestaccesstoteam) - Request access to a team
* [getTeamAccessRequest](docs/sdks/teams/README.md#getteamaccessrequest) - Get access request status
* [joinTeam](docs/sdks/teams/README.md#jointeam) - Join a team
* [updateTeamMember](docs/sdks/teams/README.md#updateteammember) - Update a Team Member
* [removeTeamMember](docs/sdks/teams/README.md#removeteammember) - Remove a Team Member
* [getTeam](docs/sdks/teams/README.md#getteam) - Get a Team
* [patchTeam](docs/sdks/teams/README.md#patchteam) - Update a Team
* [getTeams](docs/sdks/teams/README.md#getteams) - List all teams
* [createTeam](docs/sdks/teams/README.md#createteam) - Create a Team
* [postTeamDsyncRoles](docs/sdks/teams/README.md#postteamdsyncroles) - Update Team Directory Sync Role Mappings
* [deleteTeam](docs/sdks/teams/README.md#deleteteam) - Delete a Team
* [deleteTeamInviteCode](docs/sdks/teams/README.md#deleteteaminvitecode) - Delete a Team invite code

### [User](docs/sdks/user/README.md)

* [listUserEvents](docs/sdks/user/README.md#listuserevents) - List User Events
* [listEventTypes](docs/sdks/user/README.md#listeventtypes) - List Event Types
* [getAuthUser](docs/sdks/user/README.md#getauthuser) - Get the User
* [requestDelete](docs/sdks/user/README.md#requestdelete) - Delete User Account

### [Webhooks](docs/sdks/webhooks/README.md)

* [createWebhook](docs/sdks/webhooks/README.md#createwebhook) - Creates a webhook
* [getWebhooks](docs/sdks/webhooks/README.md#getwebhooks) - Get a list of webhooks
* [getWebhook](docs/sdks/webhooks/README.md#getwebhook) - Get a webhook
* [deleteWebhook](docs/sdks/webhooks/README.md#deletewebhook) - Deletes a webhook

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`accessGroupsCreateAccessGroup`](docs/sdks/accessgroups/README.md#createaccessgroup) - Creates an access group
- [`accessGroupsCreateAccessGroupProject`](docs/sdks/accessgroups/README.md#createaccessgroupproject) - Create an access group project
- [`accessGroupsDeleteAccessGroup`](docs/sdks/accessgroups/README.md#deleteaccessgroup) - Deletes an access group
- [`accessGroupsDeleteAccessGroupProject`](docs/sdks/accessgroups/README.md#deleteaccessgroupproject) - Delete an access group project
- [`accessGroupsListAccessGroupMembers`](docs/sdks/accessgroups/README.md#listaccessgroupmembers) - List members of an access group
- [`accessGroupsListAccessGroupProjects`](docs/sdks/accessgroups/README.md#listaccessgroupprojects) - List projects of an access group
- [`accessGroupsListAccessGroups`](docs/sdks/accessgroups/README.md#listaccessgroups) - List access groups for a team, project or member
- [`accessGroupsReadAccessGroup`](docs/sdks/accessgroups/README.md#readaccessgroup) - Reads an access group
- [`accessGroupsReadAccessGroupProject`](docs/sdks/accessgroups/README.md#readaccessgroupproject) - Reads an access group project
- [`accessGroupsUpdateAccessGroup`](docs/sdks/accessgroups/README.md#updateaccessgroup) - Update an access group
- [`accessGroupsUpdateAccessGroupProject`](docs/sdks/accessgroups/README.md#updateaccessgroupproject) - Update an access group project
- [`aliasesAssignAlias`](docs/sdks/aliases/README.md#assignalias) - Assign an Alias
- [`aliasesDeleteAlias`](docs/sdks/aliases/README.md#deletealias) - Delete an Alias
- [`aliasesGetAlias`](docs/sdks/aliases/README.md#getalias) - Get an Alias
- [`aliasesListAliases`](docs/sdks/aliases/README.md#listaliases) - List aliases
- [`aliasesListDeploymentAliases`](docs/sdks/aliases/README.md#listdeploymentaliases) - List Deployment Aliases
- [`aliasesPatchUrlProtectionBypass`](docs/sdks/aliases/README.md#patchurlprotectionbypass) - Update the protection bypass for a URL
- [`artifactsArtifactExists`](docs/sdks/artifacts/README.md#artifactexists) - Check if a cache artifact exists
- [`artifactsArtifactQuery`](docs/sdks/artifacts/README.md#artifactquery) - Query information about an artifact
- [`artifactsDownloadArtifact`](docs/sdks/artifacts/README.md#downloadartifact) - Download a cache artifact
- [`artifactsRecordEvents`](docs/sdks/artifacts/README.md#recordevents) - Record an artifacts cache usage event
- [`artifactsStatus`](docs/sdks/artifacts/README.md#status) - Get status of Remote Caching for this principal
- [`artifactsUploadArtifact`](docs/sdks/artifacts/README.md#uploadartifact) - Upload a cache artifact
- [`authenticationCreateAuthToken`](docs/sdks/authentication/README.md#createauthtoken) - Create an Auth Token
- [`authenticationDeleteAuthToken`](docs/sdks/authentication/README.md#deleteauthtoken) - Delete an authentication token
- [`authenticationGetAuthToken`](docs/sdks/authentication/README.md#getauthtoken) - Get Auth Token Metadata
- [`authenticationListAuthTokens`](docs/sdks/authentication/README.md#listauthtokens) - List Auth Tokens
- [`billingListBillingCharges`](docs/sdks/billing/README.md#listbillingcharges) - List FOCUS billing charges
- [`billingListContractCommitments`](docs/sdks/billing/README.md#listcontractcommitments) - List FOCUS contract commitments
- [`bulkRedirectsDeleteRedirects`](docs/sdks/bulkredirects/README.md#deleteredirects) - Delete project-level redirects.
- [`bulkRedirectsEditRedirect`](docs/sdks/bulkredirects/README.md#editredirect) - Edit a project-level redirect.
- [`bulkRedirectsGetRedirects`](docs/sdks/bulkredirects/README.md#getredirects) - Gets project-level redirects.
- [`bulkRedirectsGetVersions`](docs/sdks/bulkredirects/README.md#getversions) - Get the version history for a project's redirects.
- [`bulkRedirectsRestoreRedirects`](docs/sdks/bulkredirects/README.md#restoreredirects) - Restore staged project-level redirects to their production version.
- [`bulkRedirectsStageRedirects`](docs/sdks/bulkredirects/README.md#stageredirects) - Stages new redirects for a project.
- [`bulkRedirectsUpdateVersion`](docs/sdks/bulkredirects/README.md#updateversion) - Promote a staging version to production or restore a previous production version.
- [`certsGetCertById`](docs/sdks/certs/README.md#getcertbyid) - Get cert by id
- [`certsIssueCert`](docs/sdks/certs/README.md#issuecert) - Issue a new cert
- [`certsRemoveCert`](docs/sdks/certs/README.md#removecert) - Remove cert
- [`certsUploadCert`](docs/sdks/certs/README.md#uploadcert) - Upload a cert
- [`checksCreateCheck`](docs/sdks/checks/README.md#createcheck) - Creates a new Check
- [`checksGetAllChecks`](docs/sdks/checks/README.md#getallchecks) - Retrieve a list of all checks
- [`checksGetCheck`](docs/sdks/checks/README.md#getcheck) - Get a single check
- [`checksRerequestCheck`](docs/sdks/checks/README.md#rerequestcheck) - Rerequest a check
- [`checksUpdateCheck`](docs/sdks/checks/README.md#updatecheck) - Update a check
- [`checksV2CreateDeploymentCheckRun`](docs/sdks/checksv2/README.md#createdeploymentcheckrun) - Create a check run
- [`checksV2CreateProjectCheck`](docs/sdks/checksv2/README.md#createprojectcheck) - Create a check
- [`checksV2DeleteProjectCheck`](docs/sdks/checksv2/README.md#deleteprojectcheck) - Delete a check
- [`checksV2GetDeploymentCheckRun`](docs/sdks/checksv2/README.md#getdeploymentcheckrun) - Get a check run
- [`checksV2GetProjectCheck`](docs/sdks/checksv2/README.md#getprojectcheck) - Get a check
- [`checksV2ListCheckRuns`](docs/sdks/checksv2/README.md#listcheckruns) - List runs for a check
- [`checksV2ListDeploymentCheckRuns`](docs/sdks/checksv2/README.md#listdeploymentcheckruns) - List check runs for a deployment
- [`checksV2ListProjectChecks`](docs/sdks/checksv2/README.md#listprojectchecks) - List all checks for a project
- [`checksV2UpdateDeploymentCheckRun`](docs/sdks/checksv2/README.md#updatedeploymentcheckrun) - Update a check run
- [`checksV2UpdateProjectCheck`](docs/sdks/checksv2/README.md#updateprojectcheck) - Update a check
- [`connectCreateNetwork`](docs/sdks/connect/README.md#createnetwork) - Create a Secure Compute network
- [`connectDeleteNetwork`](docs/sdks/connect/README.md#deletenetwork) - Delete a Secure Compute network
- [`connectListNetworks`](docs/sdks/connect/README.md#listnetworks) - List Secure Compute networks
- [`connectReadNetwork`](docs/sdks/connect/README.md#readnetwork) - Read a Secure Compute network
- [`connectUpdateNetwork`](docs/sdks/connect/README.md#updatenetwork) - Update a Secure Compute network
- [`connectUpdateStaticIps`](docs/sdks/connect/README.md#updatestaticips) - Configures Static IPs for a project
- [`connectUpdateStaticIps`](docs/sdks/staticips/README.md#updatestaticips) - Configures Static IPs for a project
- [`deploymentsCancelDeployment`](docs/sdks/deployments/README.md#canceldeployment) - Cancel a deployment
- [`deploymentsCreateDeployment`](docs/sdks/deployments/README.md#createdeployment) - Create a new deployment
- [`deploymentsDeleteDeployment`](docs/sdks/deployments/README.md#deletedeployment) - Delete a Deployment
- [`deploymentsGetDeployment`](docs/sdks/deployments/README.md#getdeployment) - Get a deployment by ID or URL
- [`deploymentsGetDeploymentEvents`](docs/sdks/deployments/README.md#getdeploymentevents) - Get deployment events
- [`deploymentsGetDeploymentFileContents`](docs/sdks/deployments/README.md#getdeploymentfilecontents) - Get Deployment File Contents
- [`deploymentsGetDeployments`](docs/sdks/deployments/README.md#getdeployments) - List deployments
- [`deploymentsListDeploymentFiles`](docs/sdks/deployments/README.md#listdeploymentfiles) - List Deployment Files
- [`deploymentsUpdateIntegrationDeploymentAction`](docs/sdks/deployments/README.md#updateintegrationdeploymentaction) - Update deployment integration action
- [`deploymentsUpdateIntegrationDeploymentAction`](docs/sdks/integrations/README.md#updateintegrationdeploymentaction) - Update deployment integration action
- [`deploymentsUploadFile`](docs/sdks/deployments/README.md#uploadfile) - Upload Deployment Files
- [`dnsCreateRecord`](docs/sdks/dns/README.md#createrecord) - Create a DNS record
- [`dnsGetRecords`](docs/sdks/dns/README.md#getrecords) - List existing DNS records
- [`dnsRemoveRecord`](docs/sdks/dns/README.md#removerecord) - Delete a DNS record
- [`dnsUpdateRecord`](docs/sdks/dns/README.md#updaterecord) - Update an existing DNS record
- [`domainsCreateOrTransferDomain`](docs/sdks/domains/README.md#createortransferdomain) - Add an existing domain to the Vercel platform
- [`domainsDeleteDomain`](docs/sdks/domains/README.md#deletedomain) - Remove a domain by name
- [`domainsGetDomain`](docs/sdks/domains/README.md#getdomain) - Get Information for a Single Domain
- [`domainsGetDomainConfig`](docs/sdks/domains/README.md#getdomainconfig) - Get a Domain's configuration
- [`domainsGetDomains`](docs/sdks/domains/README.md#getdomains) - List all the domains
- [`domainsPatchDomain`](docs/sdks/domains/README.md#patchdomain) - Update or move apex domain
- [`domainsRegistrarBuyDomains`](docs/sdks/domainsregistrar/README.md#buydomains) - Buy multiple domains
- [`domainsRegistrarBuySingleDomain`](docs/sdks/domainsregistrar/README.md#buysingledomain) - Buy a domain
- [`domainsRegistrarGetBulkAvailability`](docs/sdks/domainsregistrar/README.md#getbulkavailability) - Get availability for multiple domains
- [`domainsRegistrarGetContactInfoSchema`](docs/sdks/domainsregistrar/README.md#getcontactinfoschema) - Get contact info schema
- [`domainsRegistrarGetDomainAuthCode`](docs/sdks/domainsregistrar/README.md#getdomainauthcode) - Get the auth code for a domain
- [`domainsRegistrarGetDomainAvailability`](docs/sdks/domainsregistrar/README.md#getdomainavailability) - Get availability for a domain
- [`domainsRegistrarGetDomainPrice`](docs/sdks/domainsregistrar/README.md#getdomainprice) - Get price data for a domain
- [`domainsRegistrarGetDomainTransferIn`](docs/sdks/domainsregistrar/README.md#getdomaintransferin) - Get a domain's transfer status
- [`domainsRegistrarGetOrder`](docs/sdks/domainsregistrar/README.md#getorder) - Get a domain order
- [`domainsRegistrarGetSupportedTlds`](docs/sdks/domainsregistrar/README.md#getsupportedtlds) - Get supported TLDs
- [`domainsRegistrarGetTld`](docs/sdks/domainsregistrar/README.md#gettld) - Get TLD
- [`domainsRegistrarGetTldPrice`](docs/sdks/domainsregistrar/README.md#gettldprice) - Get TLD price data
- [`domainsRegistrarRenewDomain`](docs/sdks/domainsregistrar/README.md#renewdomain) - Renew a domain
- [`domainsRegistrarTransferInDomain`](docs/sdks/domainsregistrar/README.md#transferindomain) - Transfer-in a domain
- [`domainsRegistrarUpdateDomainAutoRenew`](docs/sdks/domainsregistrar/README.md#updatedomainautorenew) - Update auto-renew for a domain
- [`domainsRegistrarUpdateDomainNameservers`](docs/sdks/domainsregistrar/README.md#updatedomainnameservers) - Update nameservers for a domain
- [`drainsCreateDrain`](docs/sdks/drains/README.md#createdrain) - Create a new Drain
- [`drainsDeleteDrain`](docs/sdks/drains/README.md#deletedrain) - Delete a drain
- [`drainsGetDrain`](docs/sdks/drains/README.md#getdrain) - Find a Drain by id
- [`drainsGetDrains`](docs/sdks/drains/README.md#getdrains) - Retrieve a list of all Drains
- [`drainsTestDrain`](docs/sdks/drains/README.md#testdrain) - Validate Drain delivery configuration
- [`drainsUpdateDrain`](docs/sdks/drains/README.md#updatedrain) - Update an existing Drain
- [`edgeCacheDangerouslyDeleteBySrcImages`](docs/sdks/edgecache/README.md#dangerouslydeletebysrcimages) - Dangerously delete by source image
- [`edgeCacheDangerouslyDeleteByTags`](docs/sdks/edgecache/README.md#dangerouslydeletebytags) - Dangerously delete by tag
- [`edgeCacheInvalidateBySrcImages`](docs/sdks/edgecache/README.md#invalidatebysrcimages) - Invalidate by source image
- [`edgeCacheInvalidateByTags`](docs/sdks/edgecache/README.md#invalidatebytags) - Invalidate by tag
- [`edgeConfigCreateEdgeConfig`](docs/sdks/edgeconfig/README.md#createedgeconfig) - Create an Edge Config
- [`edgeConfigCreateEdgeConfigToken`](docs/sdks/edgeconfig/README.md#createedgeconfigtoken) - Create an Edge Config token
- [`edgeConfigDeleteEdgeConfig`](docs/sdks/edgeconfig/README.md#deleteedgeconfig) - Delete an Edge Config
- [`edgeConfigDeleteEdgeConfigSchema`](docs/sdks/edgeconfig/README.md#deleteedgeconfigschema) - Delete an Edge Config's schema
- [`edgeConfigDeleteEdgeConfigTokens`](docs/sdks/edgeconfig/README.md#deleteedgeconfigtokens) - Delete one or more Edge Config tokens
- [`edgeConfigGetEdgeConfig`](docs/sdks/edgeconfig/README.md#getedgeconfig) - Get an Edge Config
- [`edgeConfigGetEdgeConfigBackup`](docs/sdks/edgeconfig/README.md#getedgeconfigbackup) - Get Edge Config backup
- [`edgeConfigGetEdgeConfigBackups`](docs/sdks/edgeconfig/README.md#getedgeconfigbackups) - Get Edge Config backups
- [`edgeConfigGetEdgeConfigItem`](docs/sdks/edgeconfig/README.md#getedgeconfigitem) - Get an Edge Config item
- [`edgeConfigGetEdgeConfigItems`](docs/sdks/edgeconfig/README.md#getedgeconfigitems) - Get Edge Config items
- [`edgeConfigGetEdgeConfigs`](docs/sdks/edgeconfig/README.md#getedgeconfigs) - Get Edge Configs
- [`edgeConfigGetEdgeConfigSchema`](docs/sdks/edgeconfig/README.md#getedgeconfigschema) - Get Edge Config schema
- [`edgeConfigGetEdgeConfigToken`](docs/sdks/edgeconfig/README.md#getedgeconfigtoken) - Get Edge Config token meta data
- [`edgeConfigGetEdgeConfigTokens`](docs/sdks/edgeconfig/README.md#getedgeconfigtokens) - Get all tokens of an Edge Config
- [`edgeConfigPatchEdgeConfigItems`](docs/sdks/edgeconfig/README.md#patchedgeconfigitems) - Update Edge Config items in batch
- [`edgeConfigPatchEdgeConfigSchema`](docs/sdks/edgeconfig/README.md#patchedgeconfigschema) - Update Edge Config schema
- [`edgeConfigUpdateEdgeConfig`](docs/sdks/edgeconfig/README.md#updateedgeconfig) - Update an Edge Config
- [`environmentCreateCustomEnvironment`](docs/sdks/environment/README.md#createcustomenvironment) - Create a custom environment for the current project.
- [`environmentCreateSharedEnvVariable`](docs/sdks/environment/README.md#createsharedenvvariable) - Create one or more shared environment variables
- [`environmentDeleteSharedEnvVariable`](docs/sdks/environment/README.md#deletesharedenvvariable) - Delete one or more Env Var
- [`environmentGetCustomEnvironment`](docs/sdks/environment/README.md#getcustomenvironment) - Retrieve a custom environment
- [`environmentGetSharedEnvVar`](docs/sdks/environment/README.md#getsharedenvvar) - Retrieve the decrypted value of a Shared Environment Variable by id.
- [`environmentGetV9ProjectsIdOrNameCustomEnvironments`](docs/sdks/environment/README.md#getv9projectsidornamecustomenvironments) - Retrieve custom environments
- [`environmentListSharedEnvVariable`](docs/sdks/environment/README.md#listsharedenvvariable) - Lists all Shared Environment Variables for a team
- [`environmentRemoveCustomEnvironment`](docs/sdks/environment/README.md#removecustomenvironment) - Remove a custom environment
- [`environmentUnlinkSharedEnvVariable`](docs/sdks/environment/README.md#unlinksharedenvvariable) - Disconnects a shared environment variable for a given project
- [`environmentUpdateCustomEnvironment`](docs/sdks/environment/README.md#updatecustomenvironment) - Update a custom environment
- [`environmentUpdateSharedEnvVariable`](docs/sdks/environment/README.md#updatesharedenvvariable) - Updates one or more shared environment variables
- [`featureFlagsCreateFlag`](docs/sdks/featureflags/README.md#createflag) - Create a flag
- [`featureFlagsCreateFlagSegment`](docs/sdks/featureflags/README.md#createflagsegment) - Create a segment
- [`featureFlagsCreateSDKKey`](docs/sdks/featureflags/README.md#createsdkkey) - Create an SDK key
- [`featureFlagsDeleteFlag`](docs/sdks/featureflags/README.md#deleteflag) - Delete a flag
- [`featureFlagsDeleteFlagSegment`](docs/sdks/featureflags/README.md#deleteflagsegment) - Delete a segment
- [`featureFlagsDeleteSDKKey`](docs/sdks/featureflags/README.md#deletesdkkey) - Delete an SDK key
- [`featureFlagsGetDeploymentFeatureFlags`](docs/sdks/featureflags/README.md#getdeploymentfeatureflags) - Retrieve the feature flags of a deployment
- [`featureFlagsGetFlag`](docs/sdks/featureflags/README.md#getflag) - Get a flag
- [`featureFlagsGetFlagSegment`](docs/sdks/featureflags/README.md#getflagsegment) - Get a segment
- [`featureFlagsGetFlagSettings`](docs/sdks/featureflags/README.md#getflagsettings) - Get project flag settings
- [`featureFlagsGetSDKKeys`](docs/sdks/featureflags/README.md#getsdkkeys) - Get all SDK keys
- [`featureFlagsListFlags`](docs/sdks/featureflags/README.md#listflags) - List flags
- [`featureFlagsListFlagSegments`](docs/sdks/featureflags/README.md#listflagsegments) - List segments
- [`featureFlagsListFlagVersions`](docs/sdks/featureflags/README.md#listflagversions) - List flag versions
- [`featureFlagsListTeamFlags`](docs/sdks/featureflags/README.md#listteamflags) - List all flags for a team
- [`featureFlagsListTeamFlagSettings`](docs/sdks/featureflags/README.md#listteamflagsettings) - List team project flag settings
- [`featureFlagsUpdateFlag`](docs/sdks/featureflags/README.md#updateflag) - Update a flag
- [`featureFlagsUpdateFlagSegment`](docs/sdks/featureflags/README.md#updateflagsegment) - Update a segment
- [`featureFlagsUpdateFlagSettings`](docs/sdks/featureflags/README.md#updateflagsettings) - Update project flag settings
- [`integrationsConnectIntegrationResourceToProject`](docs/sdks/integrations/README.md#connectintegrationresourcetoproject) - Connect integration resource to project
- [`integrationsCreateIntegrationStoreDirect`](docs/sdks/integrations/README.md#createintegrationstoredirect) - Create integration store (free and paid plans)
- [`integrationsDeleteConfiguration`](docs/sdks/integrations/README.md#deleteconfiguration) - Delete an integration configuration
- [`integrationsGetBillingPlans`](docs/sdks/integrations/README.md#getbillingplans) - List integration billing plans
- [`integrationsGetConfiguration`](docs/sdks/integrations/README.md#getconfiguration) - Retrieve an integration configuration
- [`integrationsGetConfigurationProducts`](docs/sdks/integrations/README.md#getconfigurationproducts) - List products for integration configuration
- [`integrationsGetConfigurations`](docs/sdks/integrations/README.md#getconfigurations) - Get configurations for the authenticated user or team
- [`integrationsGitNamespaces`](docs/sdks/integrations/README.md#gitnamespaces) - List git namespaces by provider
- [`integrationsSearchRepo`](docs/sdks/integrations/README.md#searchrepo) - List git repositories linked to namespace by provider
- [`logDrainsCreateConfigurableLogDrain`](docs/sdks/logdrains/README.md#createconfigurablelogdrain) - Creates a Configurable Log Drain (deprecated)
- [`logDrainsCreateLogDrain`](docs/sdks/logdrains/README.md#createlogdrain) - Creates a new Integration Log Drain (deprecated)
- [`logDrainsDeleteConfigurableLogDrain`](docs/sdks/logdrains/README.md#deleteconfigurablelogdrain) - Deletes a Configurable Log Drain (deprecated)
- [`logDrainsDeleteIntegrationLogDrain`](docs/sdks/logdrains/README.md#deleteintegrationlogdrain) - Deletes the Integration log drain with the provided `id` (deprecated)
- [`logDrainsGetAllLogDrains`](docs/sdks/logdrains/README.md#getalllogdrains) - Retrieves a list of all the Log Drains (deprecated)
- [`logDrainsGetConfigurableLogDrain`](docs/sdks/logdrains/README.md#getconfigurablelogdrain) - Retrieves a Configurable Log Drain (deprecated)
- [`logDrainsGetIntegrationLogDrains`](docs/sdks/logdrains/README.md#getintegrationlogdrains) - Retrieves a list of Integration log drains (deprecated)
- [`logsGetRuntimeLogs`](docs/sdks/logs/README.md#getruntimelogs) - Get logs for a deployment
- [`marketplaceCreateEvent`](docs/sdks/marketplace/README.md#createevent) - Create Event
- [`marketplaceCreateInstallationIntegrationConfiguration`](docs/sdks/marketplace/README.md#createinstallationintegrationconfiguration) - Create one or multiple experimentation items
- [`marketplaceCreateInstallationIntegrationEdgeConfig`](docs/sdks/marketplace/README.md#createinstallationintegrationedgeconfig) - Get the data of a user-provided Edge Config
- [`marketplaceDeleteInstallationIntegrationConfiguration`](docs/sdks/marketplace/README.md#deleteinstallationintegrationconfiguration) - Delete an existing experimentation item
- [`marketplaceDeleteIntegrationResource`](docs/sdks/marketplace/README.md#deleteintegrationresource) - Delete Integration Resource
- [`marketplaceExchangeSsoToken`](docs/sdks/authentication/README.md#exchangessotoken) - SSO Token Exchange
- [`marketplaceExchangeSsoToken`](docs/sdks/marketplace/README.md#exchangessotoken) - SSO Token Exchange
- [`marketplaceFinalizeInstallation`](docs/sdks/marketplace/README.md#finalizeinstallation) - Finalize Installation
- [`marketplaceGetAccountInfo`](docs/sdks/marketplace/README.md#getaccountinfo) - Get Account Information
- [`marketplaceGetIntegrationResource`](docs/sdks/marketplace/README.md#getintegrationresource) - Get Integration Resource
- [`marketplaceGetIntegrationResources`](docs/sdks/marketplace/README.md#getintegrationresources) - Get Integration Resources
- [`marketplaceGetInvoice`](docs/sdks/marketplace/README.md#getinvoice) - Get Invoice
- [`marketplaceGetMember`](docs/sdks/marketplace/README.md#getmember) - Get Member Information
- [`marketplaceGetV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfig`](docs/sdks/marketplace/README.md#getv1installationsintegrationconfigurationidresourcesresourceidexperimentationedgeconfig) - Get the data of a user-provided Edge Config
- [`marketplaceImportResource`](docs/sdks/marketplace/README.md#importresource) - Import Resource
- [`marketplaceSubmitBillingData`](docs/sdks/marketplace/README.md#submitbillingdata) - Submit Billing Data
- [`marketplaceSubmitInvoice`](docs/sdks/marketplace/README.md#submitinvoice) - Submit Invoice
- [`marketplaceSubmitPrepaymentBalances`](docs/sdks/marketplace/README.md#submitprepaymentbalances) - Submit Prepayment Balances
- [`marketplaceUpdateInstallation`](docs/sdks/marketplace/README.md#updateinstallation) - Update Installation
- [`marketplaceUpdateInstallationIntegrationConfiguration`](docs/sdks/marketplace/README.md#updateinstallationintegrationconfiguration) - Patch an existing experimentation item
- [`marketplaceUpdateInstallationIntegrationEdgeConfig`](docs/sdks/marketplace/README.md#updateinstallationintegrationedgeconfig) - Push data into a user-provided Edge Config
- [`marketplaceUpdateInvoice`](docs/sdks/marketplace/README.md#updateinvoice) - Invoice Actions
- [`marketplaceUpdateResource`](docs/sdks/marketplace/README.md#updateresource) - Update Resource
- [`marketplaceUpdateResourceSecrets`](docs/sdks/marketplace/README.md#updateresourcesecrets) - Update Resource Secrets (Deprecated)
- [`marketplaceUpdateResourceSecretsById`](docs/sdks/marketplace/README.md#updateresourcesecretsbyid) - Update Resource Secrets
- [`projectMembersAddProjectMember`](docs/sdks/projectmembers/README.md#addprojectmember) - Adds a new member to a project.
- [`projectMembersGetProjectMembers`](docs/sdks/projectmembers/README.md#getprojectmembers) - List project members
- [`projectMembersRemoveProjectMember`](docs/sdks/projectmembers/README.md#removeprojectmember) - Remove a Project Member
- [`projectsAcceptProjectTransferRequest`](docs/sdks/projects/README.md#acceptprojecttransferrequest) - Accept project transfer request
- [`projectsAddProjectDomain`](docs/sdks/projects/README.md#addprojectdomain) - Add a domain to a project
- [`projectsBatchRemoveProjectEnv`](docs/sdks/projects/README.md#batchremoveprojectenv) - Batch remove environment variables
- [`projectsCreateProject`](docs/sdks/projects/README.md#createproject) - Create a new project
- [`projectsCreateProjectEnv`](docs/sdks/projects/README.md#createprojectenv) - Create one or more environment variables
- [`projectsCreateProjectTransferRequest`](docs/sdks/projects/README.md#createprojecttransferrequest) - Create project transfer request
- [`projectsDeleteProject`](docs/sdks/projects/README.md#deleteproject) - Delete a Project
- [`projectsEditProjectEnv`](docs/sdks/projects/README.md#editprojectenv) - Edit an environment variable
- [`projectsFilterProjectEnvs`](docs/sdks/projects/README.md#filterprojectenvs) - Retrieve the environment variables of a project by id or name
- [`projectsGetProjectDomain`](docs/sdks/projects/README.md#getprojectdomain) - Get a project domain
- [`projectsGetProjectDomains`](docs/sdks/projects/README.md#getprojectdomains) - Retrieve project domains by project by id or name
- [`projectsGetProjectEnv`](docs/sdks/projects/README.md#getprojectenv) - Retrieve the decrypted value of an environment variable of a project by id
- [`projectsGetProjects`](docs/sdks/projects/README.md#getprojects) - Retrieve a list of projects
- [`projectsListPromoteAliases`](docs/sdks/projects/README.md#listpromotealiases) - Gets a list of aliases with status for the current promote
- [`projectsMoveProjectDomain`](docs/sdks/projects/README.md#moveprojectdomain) - Move a project domain
- [`projectsPatchV1ProjectsProjectIdRollbackDeploymentIdUpdateDescription`](docs/sdks/projects/README.md#patchv1projectsprojectidrollbackdeploymentidupdatedescription) - Updates the description for a rollback
- [`projectsPauseProject`](docs/sdks/projects/README.md#pauseproject) - Pause a project
- [`projectsRemoveProjectDomain`](docs/sdks/projects/README.md#removeprojectdomain) - Remove a domain from a project
- [`projectsRemoveProjectEnv`](docs/sdks/projects/README.md#removeprojectenv) - Remove an environment variable
- [`projectsRequestPromote`](docs/sdks/projects/README.md#requestpromote) - Points all production domains for a project to the given deploy
- [`projectsRequestRollback`](docs/sdks/projects/README.md#requestrollback) - Points all production domains for a project to the given deploy
- [`projectsUnpauseProject`](docs/sdks/projects/README.md#unpauseproject) - Unpause a project
- [`projectsUpdateProject`](docs/sdks/projects/README.md#updateproject) - Update an existing project
- [`projectsUpdateProjectDomain`](docs/sdks/projects/README.md#updateprojectdomain) - Update a project domain
- [`projectsUpdateProjectProtectionBypass`](docs/sdks/projects/README.md#updateprojectprotectionbypass) - Update Protection Bypass for Automation
- [`projectsVerifyProjectDomain`](docs/sdks/projects/README.md#verifyprojectdomain) - Verify project domain
- [`rollingReleaseApproveRollingReleaseStage`](docs/sdks/rollingrelease/README.md#approverollingreleasestage) - Update the active rolling release to the next stage for a project
- [`rollingReleaseCompleteRollingRelease`](docs/sdks/rollingrelease/README.md#completerollingrelease) - Complete the rolling release for the project
- [`rollingReleaseDeleteRollingReleaseConfig`](docs/sdks/rollingrelease/README.md#deleterollingreleaseconfig) - Delete rolling release configuration
- [`rollingReleaseGetRollingRelease`](docs/sdks/rollingrelease/README.md#getrollingrelease) - Get the active rolling release information for a project
- [`rollingReleaseGetRollingReleaseBillingStatus`](docs/sdks/rollingrelease/README.md#getrollingreleasebillingstatus) - Get rolling release billing status
- [`rollingReleaseGetRollingReleaseConfig`](docs/sdks/rollingrelease/README.md#getrollingreleaseconfig) - Get rolling release configuration
- [`rollingReleaseUpdateRollingReleaseConfig`](docs/sdks/rollingrelease/README.md#updaterollingreleaseconfig) - Update the rolling release settings for the project
- [`sandboxesCreateDirectory`](docs/sdks/sandboxes/README.md#createdirectory) - Create a directory
- [`sandboxesCreateSnapshot`](docs/sdks/sandboxes/README.md#createsnapshot) - Create a snapshot
- [`sandboxesDeleteSnapshot`](docs/sdks/sandboxes/README.md#deletesnapshot) - Delete a snapshot
- [`sandboxesExtendSandboxTimeout`](docs/sdks/sandboxes/README.md#extendsandboxtimeout) - Extend sandbox timeout
- [`sandboxesGetCommand`](docs/sdks/sandboxes/README.md#getcommand) - Get a command
- [`sandboxesGetCommandLogs`](docs/sdks/sandboxes/README.md#getcommandlogs) - Stream command logs
- [`sandboxesGetSandbox`](docs/sdks/sandboxes/README.md#getsandbox) - Get a sandbox
- [`sandboxesGetSnapshot`](docs/sdks/sandboxes/README.md#getsnapshot) - Get a snapshot
- [`sandboxesKillCommand`](docs/sdks/sandboxes/README.md#killcommand) - Kill a command
- [`sandboxesListCommands`](docs/sdks/sandboxes/README.md#listcommands) - List commands
- [`sandboxesListSandboxes`](docs/sdks/sandboxes/README.md#listsandboxes) - List sandboxes
- [`sandboxesListSnapshots`](docs/sdks/sandboxes/README.md#listsnapshots) - List snapshots
- [`sandboxesReadFile`](docs/sdks/sandboxes/README.md#readfile) - Read a file
- [`sandboxesRunCommand`](docs/sdks/sandboxes/README.md#runcommand) - Execute a command
- [`sandboxesStopSandbox`](docs/sdks/sandboxes/README.md#stopsandbox) - Stop a sandbox
- [`sandboxesUpdateNetworkPolicy`](docs/sdks/sandboxes/README.md#updatenetworkpolicy) - Update network policy
- [`sandboxesWriteFiles`](docs/sdks/sandboxes/README.md#writefiles) - Write files
- [`securityAddBypassIp`](docs/sdks/security/README.md#addbypassip) - Create System Bypass Rule
- [`securityGetActiveAttackStatus`](docs/sdks/security/README.md#getactiveattackstatus) - Read active attack data
- [`securityGetBypassIp`](docs/sdks/security/README.md#getbypassip) - Read System Bypass
- [`securityGetFirewallConfig`](docs/sdks/security/README.md#getfirewallconfig) - Read Firewall Configuration
- [`securityGetV1SecurityFirewallEvents`](docs/sdks/security/README.md#getv1securityfirewallevents) - Read Firewall Actions by Project
- [`securityPutFirewallConfig`](docs/sdks/security/README.md#putfirewallconfig) - Put Firewall Configuration
- [`securityRemoveBypassIp`](docs/sdks/security/README.md#removebypassip) - Remove System Bypass Rule
- [`securityUpdateAttackChallengeMode`](docs/sdks/security/README.md#updateattackchallengemode) - Update Attack Challenge mode
- [`securityUpdateFirewallConfig`](docs/sdks/security/README.md#updatefirewallconfig) - Update Firewall Configuration
- [`teamsCreateTeam`](docs/sdks/teams/README.md#createteam) - Create a Team
- [`teamsDeleteTeam`](docs/sdks/teams/README.md#deleteteam) - Delete a Team
- [`teamsDeleteTeamInviteCode`](docs/sdks/teams/README.md#deleteteaminvitecode) - Delete a Team invite code
- [`teamsGetTeam`](docs/sdks/teams/README.md#getteam) - Get a Team
- [`teamsGetTeamAccessRequest`](docs/sdks/teams/README.md#getteamaccessrequest) - Get access request status
- [`teamsGetTeamMembers`](docs/sdks/teams/README.md#getteammembers) - List team members
- [`teamsGetTeams`](docs/sdks/teams/README.md#getteams) - List all teams
- [`teamsInviteUserToTeam`](docs/sdks/teams/README.md#inviteusertoteam) - Invite a user
- [`teamsJoinTeam`](docs/sdks/teams/README.md#jointeam) - Join a team
- [`teamsPatchTeam`](docs/sdks/teams/README.md#patchteam) - Update a Team
- [`teamsPostTeamDsyncRoles`](docs/sdks/teams/README.md#postteamdsyncroles) - Update Team Directory Sync Role Mappings
- [`teamsRemoveTeamMember`](docs/sdks/teams/README.md#removeteammember) - Remove a Team Member
- [`teamsRequestAccessToTeam`](docs/sdks/teams/README.md#requestaccesstoteam) - Request access to a team
- [`teamsUpdateTeamMember`](docs/sdks/teams/README.md#updateteammember) - Update a Team Member
- [`userGetAuthUser`](docs/sdks/user/README.md#getauthuser) - Get the User
- [`userListEventTypes`](docs/sdks/user/README.md#listeventtypes) - List Event Types
- [`userListUserEvents`](docs/sdks/user/README.md#listuserevents) - List User Events
- [`userRequestDelete`](docs/sdks/user/README.md#requestdelete) - Delete User Account
- [`webhooksCreateWebhook`](docs/sdks/webhooks/README.md#createwebhook) - Creates a webhook
- [`webhooksDeleteWebhook`](docs/sdks/webhooks/README.md#deletewebhook) - Deletes a webhook
- [`webhooksGetWebhook`](docs/sdks/webhooks/README.md#getwebhook) - Get a webhook
- [`webhooksGetWebhooks`](docs/sdks/webhooks/README.md#getwebhooks) - Get a list of webhooks

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Json Streaming [jsonl] -->
## Json Streaming

Json Streaming ([jsonl][jsonl-format] / [x-ndjson][x-ndjson]) content type can be used to stream content from certain operations. These operations expose the stream as an [AsyncGenerator][async-generator] that can be consumed using a `for await...of` loop in TypeScript/JavaScript. The loop will terminate when the server no longer has any events to send and closes the underlying connection.

Here's an example of consuming a JSONL stream:

```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.billing.listBillingCharges({
    from: "2025-01-01T00:00:00.000Z",
    to: "2025-01-31T00:00:00.000Z",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
  });

  for await (const event of result) {
    // Handle the event
    console.log(event);
  }
}

run();

```

[jsonl-format]: https://jsonlines.org/
[x-ndjson]: https://github.com/ndjson/ndjson-spec
[async-generator]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator
<!-- End Json Streaming [jsonl] -->

<!-- Start File uploads [file-upload] -->
## File uploads

Certain SDK methods accept files as part of a multi-part request. It is possible and typically recommended to upload files as a stream rather than reading the entire contents into memory. This avoids excessive memory consumption and potentially crashing with out-of-memory errors when working with very large files. The following example demonstrates how to attach a file stream to a request.

> [!TIP]
>
> Depending on your JavaScript runtime, there are convenient utilities that return a handle to a file without reading the entire contents into memory:
>
> - **Node.js v20+:** Since v20, Node.js comes with a native `openAsBlob` function in [`node:fs`](https://nodejs.org/docs/latest-v20.x/api/fs.html#fsopenasblobpath-options).
> - **Bun:** The native [`Bun.file`](https://bun.sh/docs/api/file-io#reading-files-bun-file) function produces a file handle that can be used for streaming file uploads.
> - **Browsers:** All supported browsers return an instance to a [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File) when reading the value from an `<input type="file">` element.
> - **Node.js v18:** A file stream can be created using the `fileFrom` helper from [`fetch-blob/from.js`](https://www.npmjs.com/package/fetch-blob).

```typescript
import { Vercel } from "@vercel/sdk";
import { openAsBlob } from "node:fs";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.artifacts.uploadArtifact({
    contentLength: 3848.22,
    xArtifactDuration: 400,
    xArtifactClientCi: "VERCEL",
    xArtifactClientInteractive: 0,
    xArtifactTag: "Tc0BmHvJYMIYJ62/zx87YqO0Flxk+5Ovip25NY825CQ=",
    hash: "12HKQaOmR5t5Uy6vdcQsNIiZgHGB",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
    requestBody: await openAsBlob("example.file"),
  });

  console.log(result);
}

run();

```
<!-- End File uploads [file-upload] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.accessGroups.readAccessGroup({
    idOrName: "ag_1a2b3c4d5e6f7g8h9i0j",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
  }, {
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.accessGroups.readAccessGroup({
    idOrName: "ag_1a2b3c4d5e6f7g8h9i0j",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
  });

  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

[`VercelError`](./src/models/vercelerror.ts) is the base class for all HTTP error responses. It has the following properties:

| Property            | Type       | Description                                                                             |
| ------------------- | ---------- | --------------------------------------------------------------------------------------- |
| `error.message`     | `string`   | Error message                                                                           |
| `error.statusCode`  | `number`   | HTTP response status code eg `404`                                                      |
| `error.headers`     | `Headers`  | HTTP response headers                                                                   |
| `error.body`        | `string`   | HTTP body. Can be empty string if no body is returned.                                  |
| `error.rawResponse` | `Response` | Raw HTTP response                                                                       |
| `error.data$`       |            | Optional. Some errors may contain structured data. [See Error Classes](#error-classes). |

### Example
```typescript
import { Vercel } from "@vercel/sdk";
import { HttpApiDecodeError } from "@vercel/sdk/models/httpapidecodeerror.js";
import { VercelError } from "@vercel/sdk/models/vercelerror.js.js";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  try {
    const result = await vercel.domainsRegistrar.getSupportedTlds({
      teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    });

    console.log(result);
  } catch (error) {
    // The base class for HTTP error responses
    if (error instanceof VercelError) {
      console.log(error.message);
      console.log(error.statusCode);
      console.log(error.body);
      console.log(error.headers);

      // Depending on the method different errors may be thrown
      if (error instanceof HttpApiDecodeError) {
        console.log(error.data$.issues); // Issue[]
        console.log(error.data$.message); // string
      }
    }
  }
}

run();

```

### Error Classes
**Primary error:**
* [`VercelError`](./src/models/vercelerror.ts): The base class for HTTP error responses.

<details><summary>Less common errors (31)</summary>

<br />

**Network errors:**
* [`ConnectionError`](./src/models/httpclienterrors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](./src/models/httpclienterrors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](./src/models/httpclienterrors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](./src/models/httpclienterrors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](./src/models/httpclienterrors.ts): Unrecognised or unexpected error.


**Inherit from [`VercelError`](./src/models/vercelerror.ts)**:
* [`HttpApiDecodeError`](./src/models/httpapidecodeerror.ts): The request did not match the expected schema. Status code `400`. Applicable to 16 of 282 methods.*
* [`Unauthorized`](./src/models/unauthorized.ts): Unauthorized. Status code `401`. Applicable to 16 of 282 methods.*
* [`NotAuthorizedForScope`](./src/models/notauthorizedforscope.ts): NotAuthorizedForScope. Status code `403`. Applicable to 16 of 282 methods.*
* [`TooManyRequests`](./src/models/toomanyrequests.ts): TooManyRequests. Status code `429`. Applicable to 16 of 282 methods.*
* [`InternalServerError`](./src/models/internalservererror.ts): InternalServerError. Status code `500`. Applicable to 16 of 282 methods.*
* [`Forbidden`](./src/models/forbidden.ts): NotAuthorizedForScope. Status code `403`. Applicable to 9 of 282 methods.*
* [`TldNotSupported`](./src/models/tldnotsupported.ts): The TLD is not currently supported. Status code `400`. Applicable to 7 of 282 methods.*
* [`DomainTooShort`](./src/models/domaintooshort.ts): The domain name (excluding the TLD) is too short. Status code `400`. Applicable to 5 of 282 methods.*
* [`BadRequest`](./src/models/badrequest.ts): There was something wrong with the request. Status code `400`. Applicable to 4 of 282 methods.*
* [`DomainNotRegistered`](./src/models/domainnotregistered.ts): The domain is not registered with Vercel. Status code `400`. Applicable to 4 of 282 methods.*
* [`ExpectedPriceMismatch`](./src/models/expectedpricemismatch.ts): The expected price passed does not match the actual price. Status code `400`. Applicable to 4 of 282 methods.*
* [`DomainNotAvailable`](./src/models/domainnotavailable.ts): The domain is not available. Status code `400`. Applicable to 4 of 282 methods.*
* [`DomainNotFound`](./src/models/domainnotfound.ts): The domain was not found in our system. Status code `404`. Applicable to 4 of 282 methods.*
* [`NotFound`](./src/models/notfound.ts): NotFound. Status code `404`. Applicable to 3 of 282 methods.*
* [`OrderTooExpensive`](./src/models/ordertooexpensive.ts): The total price of the order is too high. Status code `400`. Applicable to 2 of 282 methods.*
* [`InvalidAdditionalContactInfo`](./src/models/invalidadditionalcontactinfo.ts): Additional contact information provided for the TLD is invalid. Status code `400`. Applicable to 2 of 282 methods.*
* [`AdditionalContactInfoRequired`](./src/models/additionalcontactinforequired.ts): Additional contact information is required for the TLD. Status code `400`. Applicable to 2 of 282 methods.*
* [`LanguageCodeRequired`](./src/models/languagecoderequired.ts): A language code is required for punycode domains. Status code `400`. Applicable to 2 of 282 methods.*
* [`TooManyDomains`](./src/models/toomanydomains.ts): The number of domains in the order is too high. Status code `400`. Applicable to 1 of 282 methods.*
* [`DuplicateDomains`](./src/models/duplicatedomains.ts): Duplicate domains were provided. Status code `400`. Applicable to 1 of 282 methods.*
* [`DomainAlreadyOwned`](./src/models/domainalreadyowned.ts): The domain is already owned by another team or user. Status code `400`. Applicable to 1 of 282 methods.*
* [`DNSSECEnabled`](./src/models/dnssecenabled.ts): The operation cannot be completed because DNSSEC is enabled for the domain. Status code `400`. Applicable to 1 of 282 methods.*
* [`DomainAlreadyRenewing`](./src/models/domainalreadyrenewing.ts): The domain is already renewing. Status code `400`. Applicable to 1 of 282 methods.*
* [`DomainNotRenewable`](./src/models/domainnotrenewable.ts): The domain is not renewable. Status code `400`. Applicable to 1 of 282 methods.*
* [`DomainCannotBeTransferedOutUntil`](./src/models/domaincannotbetransferedoutuntil.ts): The domain cannot be transfered out until the specified date. Status code `409`. Applicable to 1 of 282 methods.*
* [`ResponseValidationError`](./src/models/responsevalidationerror.ts): Type mismatch between the data returned from the server and the structure expected by the SDK. See `error.rawValue` for the raw value and `error.pretty()` for a nicely formatted multi-line string.

</details>

\* Check [the method documentation](#available-resources-and-operations) to see if the error is applicable.
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Override Server URL Per-Client

The default server can be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  serverURL: "https://api.vercel.com",
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.accessGroups.readAccessGroup({
    idOrName: "ag_1a2b3c4d5e6f7g8h9i0j",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
  });

  console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to:
- route requests through a proxy server using [undici](https://www.npmjs.com/package/undici)'s ProxyAgent
- use the `"beforeRequest"` hook to add a custom header and a timeout to requests
- use the `"requestError"` hook to log errors

```typescript
import { Vercel } from "@vercel/sdk";
import { ProxyAgent } from "undici";
import { HTTPClient } from "@vercel/sdk/lib/http";

const dispatcher = new ProxyAgent("http://proxy.example.com:8080");

const httpClient = new HTTPClient({
  // 'fetcher' takes a function that has the same signature as native 'fetch'.
  fetcher: (input, init) =>
    // 'dispatcher' is specific to undici and not part of the standard Fetch API.
    fetch(input, { ...init, dispatcher } as RequestInit),
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new Vercel({ httpClient: httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { Vercel } from "@vercel/sdk";

const sdk = new Vercel({ debugLogger: console });
```
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation. 
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release. 

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=@vercel/sdk&utm_campaign=typescript)
