# UploadProjectAvatarHas1

## Example Usage

```typescript
import { UploadProjectAvatarHas1 } from "@vercel/sdk/models/uploadprojectavatartracing.js";

let value: UploadProjectAvatarHas1 = {
  type: "header",
  key: "x-vercel-ip-country",
  value: {
    eq: "<value>",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `type`                                                                         | *"header"*                                                                     | :heavy_check_mark:                                                             | N/A                                                                            |
| `key`                                                                          | [models.UploadProjectAvatarHasKey](../models/uploadprojectavatarhaskey.md)     | :heavy_check_mark:                                                             | N/A                                                                            |
| `value`                                                                        | [models.UploadProjectAvatarHasValue](../models/uploadprojectavatarhasvalue.md) | :heavy_check_mark:                                                             | N/A                                                                            |