# OneHundredAndFiftyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFiftyFive } from "@vercel/sdk/models/usereventjobpayload979githashtagvercel.js";

let value: OneHundredAndFiftyFive = {
  provider: "bitbucket",
  actorLogin: "<value>",
  actorAccountId: "<id>",
  installationId: "<id>",
  usedAppToken: true,
  sourceRepo: "<value>",
  sourceCommitSha: "<value>",
  destinationRepo: "<value>",
  destinationBranch: "<value>",
  resultCommitSha: "<value>",
  outcome: "failure",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `provider`                                                                     | [models.UserEventPayload155Provider](../models/usereventpayload155provider.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `actorLogin`                                                                   | *string*                                                                       | :heavy_check_mark:                                                             | Display name only. Logins are mutable; join on `actorAccountId`.               |
| `actorAccountId`                                                               | *string*                                                                       | :heavy_check_mark:                                                             | Stable account id on `provider`.                                               |
| `installationId`                                                               | *string*                                                                       | :heavy_check_mark:                                                             | Set only when an App installation token was minted (GitHub only).              |
| `usedAppToken`                                                                 | *boolean*                                                                      | :heavy_check_mark:                                                             | N/A                                                                            |
| `sourceRepo`                                                                   | *string*                                                                       | :heavy_check_mark:                                                             | Source repository, "owner/name".                                               |
| `sourceCommitSha`                                                              | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `destinationRepo`                                                              | *string*                                                                       | :heavy_check_mark:                                                             | "owner/name", or the raw request value if blocked before it resolved.          |
| `destinationBranch`                                                            | *string*                                                                       | :heavy_check_mark:                                                             | Branch actually pushed to, or the requested one if blocked.                    |
| `resultCommitSha`                                                              | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `outcome`                                                                      | [models.Outcome](../models/outcome.md)                                         | :heavy_check_mark:                                                             | N/A                                                                            |
| `failureStage`                                                                 | [models.FailureStage](../models/failurestage.md)                               | :heavy_minus_sign:                                                             | Mirrors `PushFailureStage` in `@api/git-push-repo`.                            |
| `failureCode`                                                                  | *string*                                                                       | :heavy_minus_sign:                                                             | Sanitized code, never a raw error message.                                     |