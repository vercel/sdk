# DangerouslyDeleteByTagsRequestBody

## Example Usage

```typescript
import { DangerouslyDeleteByTagsRequestBody } from "@vercel/sdk/models/dangerouslydeletebytagsop.js";

let value: DangerouslyDeleteByTagsRequestBody = {
  tags: [],
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `revalidationDeadlineSeconds`                                                      | *number*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `tags`                                                                             | *models.DangerouslyDeleteByTagsTags*                                               | :heavy_check_mark:                                                                 | N/A                                                                                |
| `target`                                                                           | [models.DangerouslyDeleteByTagsTarget](../models/dangerouslydeletebytagstarget.md) | :heavy_minus_sign:                                                                 | N/A                                                                                |