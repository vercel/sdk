# TwoHundredAndTwelve

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndTwelve } from "@vercel/sdk/models/removedusers.js";

let value: TwoHundredAndTwelve = {
  projectId: "<id>",
  projectName: "<value>",
  gitProvider: "vercel",
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