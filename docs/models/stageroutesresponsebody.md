# StageRoutesResponseBody

## Example Usage

```typescript
import { StageRoutesResponseBody } from "@vercel/sdk/models/stageroutesop.js";

let value: StageRoutesResponseBody = {
  version: {
    createdBy: "<value>",
    id: "<id>",
    lastModified: 7526.39,
    s3Key: "<value>",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `version`                                                    | [models.StageRoutesVersion](../models/stageroutesversion.md) | :heavy_check_mark:                                           | A version of routing rules stored in S3.                     |