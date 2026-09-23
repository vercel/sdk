# ListEventType

A user-facing event type.

## Example Usage

```typescript
import { ListEventType } from "@vercel/sdk/models/listeventtype.js";

let value: ListEventType = {
  categories: [
    "deployment",
  ],
  description: "mummify medium whirlwind vanish via glaring yum",
  name: "project-deployment-policy-updated",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `categories`                                                                   | [models.ListEventTypeCategories](../models/listeventtypecategories.md)[]       | :heavy_check_mark:                                                             | Categories that group this event type with related event types.                | [<br/>"deployment"<br/>]                                                       |
| `deprecated`                                                                   | *boolean*                                                                      | :heavy_minus_sign:                                                             | Present only when this event type is deprecated.                               |                                                                                |
| `description`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | Description of the event, visible to users in the Activity dashboard and docs. |                                                                                |
| `name`                                                                         | [models.Name](../models/name.md)                                               | :heavy_check_mark:                                                             | The name of the event type.                                                    | deployment-created                                                             |
| `replacedBy`                                                                   | [models.ReplacedBy](../models/replacedby.md)[]                                 | :heavy_minus_sign:                                                             | Event type names that supersede this deprecated event type.                    |                                                                                |