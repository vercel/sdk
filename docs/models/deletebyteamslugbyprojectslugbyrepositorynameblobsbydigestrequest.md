# DeleteByTeamSlugByProjectSlugByRepositoryNameBlobsByDigestRequest

## Example Usage

```typescript
import { DeleteByTeamSlugByProjectSlugByRepositoryNameBlobsByDigestRequest } from "@vercel/sdk/models/deletebyteamslugbyprojectslugbyrepositorynameblobsbydigestop.js";

let value: DeleteByTeamSlugByProjectSlugByRepositoryNameBlobsByDigestRequest = {
  teamSlug: "team-slug",
  projectSlug: "project-slug",
  repositoryName: "nginx",
  digest:
    "sha256:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             | Example                                                                 |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `teamSlug`                                                              | *string*                                                                | :heavy_check_mark:                                                      | Single Docker repository team slug or team ID component.                | team-slug                                                               |
| `projectSlug`                                                           | *string*                                                                | :heavy_check_mark:                                                      | Single Docker repository project slug component.                        | project-slug                                                            |
| `repositoryName`                                                        | *string*                                                                | :heavy_check_mark:                                                      | Single Docker repository name component.                                | nginx                                                                   |
| `digest`                                                                | *string*                                                                | :heavy_check_mark:                                                      | Content-addressable digest (algorithm:hex).                             | sha256:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855 |