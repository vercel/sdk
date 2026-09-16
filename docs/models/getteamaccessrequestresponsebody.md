# GetTeamAccessRequestResponseBody

Successfully

## Example Usage

```typescript
import { GetTeamAccessRequestResponseBody } from "@vercel/sdk/models/getteamaccessrequestop.js";

let value: GetTeamAccessRequestResponseBody = {
  accessRequestedAt: 1588720733602,
  bitbucket: {},
  confirmed: false,
  github: {},
  gitlab: {},
  joinedFrom: {
    origin: "import",
  },
  teamName: "My Team",
  teamSlug: "my-team",
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 | Example                                                                                     |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `accessRequestedAt`                                                                         | *number*                                                                                    | :heavy_check_mark:                                                                          | Timestamp in milliseconds when the user requested access to the team.                       | 1588720733602                                                                               |
| `bitbucket`                                                                                 | [models.GetTeamAccessRequestBitbucket](../models/getteamaccessrequestbitbucket.md)          | :heavy_check_mark:                                                                          | Map of the connected Bitbucket account.                                                     |                                                                                             |
| `confirmed`                                                                                 | *boolean*                                                                                   | :heavy_check_mark:                                                                          | Current status of the membership. Will be `true` if confirmed, if pending it'll be `false`. | false                                                                                       |
| `github`                                                                                    | [models.GetTeamAccessRequestGithub](../models/getteamaccessrequestgithub.md)                | :heavy_check_mark:                                                                          | Map of the connected GitHub account.                                                        |                                                                                             |
| `gitlab`                                                                                    | [models.GetTeamAccessRequestGitlab](../models/getteamaccessrequestgitlab.md)                | :heavy_check_mark:                                                                          | Map of the connected GitLab account.                                                        |                                                                                             |
| `joinedFrom`                                                                                | [models.GetTeamAccessRequestJoinedFrom](../models/getteamaccessrequestjoinedfrom.md)        | :heavy_check_mark:                                                                          | A map that describes the origin from where the user joined.                                 |                                                                                             |
| `teamName`                                                                                  | *string*                                                                                    | :heavy_check_mark:                                                                          | The name of the team.                                                                       | My Team                                                                                     |
| `teamSlug`                                                                                  | *string*                                                                                    | :heavy_check_mark:                                                                          | The slug of the team.                                                                       | my-team                                                                                     |