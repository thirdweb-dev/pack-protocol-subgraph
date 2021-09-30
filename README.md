# $PACK Protocol: Subgraph

**WIP**. This is the subgraph for [$PACK Protocol](https://github.com/nftlabs/pack-protocol). 

## Subgraph endpoints

### Mumbai
- Subgrpah ID: Qma7yJbss3CoCMwyMGg6YruyM1VzuTHsu1AQtVBDtXu2zF
- View on explorer: https://thegraph.com/legacy-explorer/subgraph/nftlabs/pack-protocol-mumbai
- API endpoint: https://api.thegraph.com/subgraphs/name/nftlabs/pack-protocol-mumbai

## Check subgraph health

- Go to : [https://graphiql-online.com/](https://graphiql-online.com/)
- Enter API endpoint [https://api.thegraph.com/index-node/graphql](https://api.thegraph.com/index-node/graphql)
- Check deployment ID in subgraph studio

    (e.g. "QmXnnbR1dzxY83K38jAQcPMDWUCJX4vZW4z9MkHd4ZdLyq")

- Paste the following query with the relevant deployment ID:

    ```graphql
    {
      indexingStatuses(subgraphs: ["QmZdba9AdaTosca9PNG1iGZ5ziDn3s96P12Q6fk7UThzwf"]) {
        subgraph
        synced
        health
        fatalError {
          handler
          message
          deterministic
          block {
            hash
            number
          }
        }
        nonFatalErrors {
          handler
          message
          deterministic
        }
      }
    }
    ```
