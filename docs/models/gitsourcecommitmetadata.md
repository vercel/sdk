# GitSourceCommitMetadata

## Example Usage

```typescript
import { GitSourceCommitMetadata } from "@vercel/sdk/models/readystate.js";

let value: GitSourceCommitMetadata = {
  author: {
    date: "2024-05-21",
    email: "Tristian56@yahoo.com",
    name: "<value>",
  },
  committer: {
    date: "2024-08-28",
    email: "Juliet_Cormier7@hotmail.com",
    name: "<value>",
  },
  message: "<value>",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `author`                                                     | [models.GitSourceAuthor](../models/gitsourceauthor.md)       | :heavy_check_mark:                                           | N/A                                                          |
| `committer`                                                  | [models.GitSourceCommitter](../models/gitsourcecommitter.md) | :heavy_check_mark:                                           | N/A                                                          |
| `message`                                                    | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |