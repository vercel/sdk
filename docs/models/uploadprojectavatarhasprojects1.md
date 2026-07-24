# UploadProjectAvatarHasProjects1

## Example Usage

```typescript
import { UploadProjectAvatarHasProjects1 } from "@vercel/sdk/models/uploadprojectavatartracing.js";

let value: UploadProjectAvatarHasProjects1 = {
  type: "header",
  key: "x-vercel-ip-country",
  value: {
    eq: "<value>",
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                         | *"header"*                                                                                                     | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `key`                                                                                                          | [models.UploadProjectAvatarHasProjectsKey](../models/uploadprojectavatarhasprojectskey.md)                     | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `value`                                                                                                        | [models.UploadProjectAvatarHasProjectsResponseValue](../models/uploadprojectavatarhasprojectsresponsevalue.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |