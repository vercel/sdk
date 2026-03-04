# OneHundredAndSixtyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSixtyOne } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndSixtyOne = {
  projectId: "<id>",
  projectName: "<value>",
  gitProvider: "bitbucket",
  gitRepoId: "<id>",
  gitRepositoryName: "<value>",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `projectId`                                    | *string*                                       | :heavy_check_mark:                             | N/A                                            |
| `projectName`                                  | *string*                                       | :heavy_check_mark:                             | N/A                                            |
| `gitProvider`                                  | [models.GitProvider](../models/gitprovider.md) | :heavy_check_mark:                             | N/A                                            |
| `gitRepoId`                                    | *string*                                       | :heavy_check_mark:                             | N/A                                            |
| `gitRepositoryName`                            | *string*                                       | :heavy_check_mark:                             | N/A                                            |