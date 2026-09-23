# CommitMetadata

## Example Usage

```typescript
import { CommitMetadata } from "@vercel/sdk/models/commitverification.js";

let value: CommitMetadata = {
  author: {
    date: "2024-01-22",
    email: "Shanon32@hotmail.com",
    name: "<value>",
  },
  committer: {
    date: "2024-08-08",
    email: "Maryse42@yahoo.com",
    name: "<value>",
  },
  message: "<value>",
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `author`                                   | [models.Author](../models/author.md)       | :heavy_check_mark:                         | N/A                                        |
| `committer`                                | [models.Committer](../models/committer.md) | :heavy_check_mark:                         | N/A                                        |
| `message`                                  | *string*                                   | :heavy_check_mark:                         | N/A                                        |