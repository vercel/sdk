# TwoHundredAndEightyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndEightyFour } from "@vercel/sdk/models/twohundredandtwenty.js";

let value: TwoHundredAndEightyFour = {
  gitProvider: "vercel",
  gitRepoId: "<id>",
  gitRepositoryName: "<value>",
  projectId: "<id>",
  projectName: "<value>",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `gitProvider`                                  | [models.GitProvider](../models/gitprovider.md) | :heavy_check_mark:                             | N/A                                            |
| `gitRepoId`                                    | *string*                                       | :heavy_check_mark:                             | N/A                                            |
| `gitRepositoryName`                            | *string*                                       | :heavy_check_mark:                             | N/A                                            |
| `projectId`                                    | *string*                                       | :heavy_check_mark:                             | N/A                                            |
| `projectName`                                  | *string*                                       | :heavy_check_mark:                             | N/A                                            |