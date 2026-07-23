# CreateConnectorRequestBody

## Example Usage

```typescript
import { CreateConnectorRequestBody } from "@vercel/sdk/models/createconnectorop.js";

let value: CreateConnectorRequestBody = {
  data: {
    values: [
      {
        value: "<value>",
      },
    ],
  },
  type: "<value>",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `data`                                                                                           | *models.CreateConnectorData*                                                                     | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `icon`                                                                                           | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `backgroundColor`                                                                                | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `accentColor`                                                                                    | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `type`                                                                                           | *string*                                                                                         | :heavy_check_mark:                                                                               | Known types: api-key, github, linear, oauth, salesforce, slack, snowflake.                       |
| `service`                                                                                        | *string*                                                                                         | :heavy_minus_sign:                                                                               | Service slug or URL for which the connector is used.                                             |
| `uid`                                                                                            | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `name`                                                                                           | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `projectId`                                                                                      | *string*                                                                                         | :heavy_minus_sign:                                                                               | Link to the specified project when specified. See environments.                                  |
| `environments`                                                                                   | *string*[]                                                                                       | :heavy_minus_sign:                                                                               | Use these built-in environment names or stable custom environment IDs when linking to projectId. |
| `triggers`                                                                                       | *boolean*                                                                                        | :heavy_minus_sign:                                                                               | Whether the triggers are enabled for this connector.                                             |
| `events`                                                                                         | *string*[]                                                                                       | :heavy_minus_sign:                                                                               | The list of the defaults trigger events for this connector.                                      |