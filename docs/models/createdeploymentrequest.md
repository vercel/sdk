# CreateDeploymentRequest

## Example Usage

```typescript
import { CreateDeploymentRequest } from "@vercel/sdk/models/createdeploymentop.js";

let value: CreateDeploymentRequest = {
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
  requestBody: {
    deploymentId: "dpl_2qn7PZrx89yxY34vEZPD31Y9XVj6",
    files: [
      {
        file: "folder/file.js",
      },
    ],
    gitMetadata: {
      remoteUrl: "https://github.com/vercel/next.js",
      commitAuthorName: "kyliau",
      commitMessage:
        "add method to measure Interaction to Next Paint (INP) (#36490)",
      commitRef: "main",
      commitSha: "dc36199b2234c6586ebe05ec94078a895c707e29",
      dirty: true,
    },
    gitSource: {
      ref: "main",
      repoUuid: "123e4567-e89b-12d3-a456-426614174000",
      sha: "a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0",
      type: "bitbucket",
      workspaceUuid: "987e6543-e21b-12d3-a456-426614174000",
    },
    meta: {
      "foo": "bar",
    },
    name: "my-instant-deployment",
    project: "my-deployment-project",
    projectSettings: {
      buildCommand: "next build",
      installCommand: "pnpm install",
    },
    target: "production",
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `forceNew`                                                                           | [models.ForceNew](../models/forcenew.md)                                             | :heavy_minus_sign:                                                                   | Forces a new deployment even if there is a previous similar deployment               |                                                                                      |
| `skipAutoDetectionConfirmation`                                                      | [models.SkipAutoDetectionConfirmation](../models/skipautodetectionconfirmation.md)   | :heavy_minus_sign:                                                                   | Allows to skip framework detection so the API would not fail to ask for confirmation |                                                                                      |
| `teamId`                                                                             | *string*                                                                             | :heavy_minus_sign:                                                                   | The Team identifier to perform the request on behalf of.                             | team_1a2b3c4d5e6f7g8h9i0j1k2l                                                        |
| `slug`                                                                               | *string*                                                                             | :heavy_minus_sign:                                                                   | The Team slug to perform the request on behalf of.                                   | my-team-url-slug                                                                     |
| `requestBody`                                                                        | [models.CreateDeploymentRequestBody](../models/createdeploymentrequestbody.md)       | :heavy_check_mark:                                                                   | N/A                                                                                  |                                                                                      |