# UserEventPayload280Next

## Example Usage

```typescript
import { UserEventPayload280Next } from "@vercel/sdk/models/twohundredandseventeen.js";

let value: UserEventPayload280Next = {
  gitProvider: "gitlab",
  gitRepoId: "<id>",
  gitRepositoryName: "<value>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `gitProvider`                                                                  | [models.UserEventPayloadGitProvider](../models/usereventpayloadgitprovider.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `gitRepoId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `gitRepositoryName`                                                            | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |