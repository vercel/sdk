# ReplaceByTeamSlugByProjectSlugByRepositoryNameBlobsUploadsByUuidRequest

## Example Usage

```typescript
import { ReplaceByTeamSlugByProjectSlugByRepositoryNameBlobsUploadsByUuidRequest } from "@vercel/sdk/models/replacebyteamslugbyprojectslugbyrepositorynameblobsuploadsbyuuidop.js";

let value:
  ReplaceByTeamSlugByProjectSlugByRepositoryNameBlobsUploadsByUuidRequest = {
    teamSlug: "team-slug",
    projectSlug: "project-slug",
    repositoryName: "nginx",
    uuid: "0123456789abcdef0123456789abcdef01234567",
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
| `uuid`                                                                  | *string*                                                                | :heavy_check_mark:                                                      | Blob upload session identifier.                                         | 0123456789abcdef0123456789abcdef01234567                                |
| `digest`                                                                | *string*                                                                | :heavy_check_mark:                                                      | Content-addressable digest (algorithm:hex).                             | sha256:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855 |