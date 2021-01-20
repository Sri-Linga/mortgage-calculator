import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
// material ui imports
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
  TableContainer,
  Paper,
  Typography,
  Grid
} from "@material-ui/core";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#284162",
    color: theme.palette.common.white,
    fontSize: 18
  },
  body: {
    fontSize: 16
  }
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover
    }
  }
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700
  }
});

const MortgageCalculationSummary = ({ interestDetails, mortgageDetails }) => {
  const classes = useStyles();

  return (
    <>
      <Grid item xs={12}>
        <Typography variant="h4" align="center" gutterBottom>
          Calculation Summary
        </Typography>
      </Grid>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Category</StyledTableCell>
              <StyledTableCell align="center">Term</StyledTableCell>
              <StyledTableCell align="right">
                Amortization Period
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                Number of Payments
              </StyledTableCell>
              <StyledTableCell align="center">
                {mortgageDetails.term * 12}
              </StyledTableCell>
              <StyledTableCell align="right">
                {mortgageDetails.amortizationPeriodYear * 12}
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                Mortgage Payment
              </StyledTableCell>
              <StyledTableCell align="center">
                {interestDetails.mortgageAmountPerMonth}
              </StyledTableCell>
              <StyledTableCell align="right">
                {interestDetails.mortgageAmountPerMonth}
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                Prepayment
              </StyledTableCell>
              <StyledTableCell align="center">
                {mortgageDetails.prepaymentAmount}
              </StyledTableCell>
              <StyledTableCell align="right">
                {mortgageDetails.prepaymentAmount}
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                Principal Payments
              </StyledTableCell>
              <StyledTableCell align="center">
                {interestDetails.termPrincipleAmount}
              </StyledTableCell>
              <StyledTableCell align="right">
                {mortgageDetails.mortgageAmount}
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                Interest Payments
              </StyledTableCell>
              <StyledTableCell align="center">
                {interestDetails.termInterestAmount}
              </StyledTableCell>
              <StyledTableCell align="right">
                {interestDetails.totalInterestInPeriod}
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                Total Cost
              </StyledTableCell>
              <StyledTableCell align="center" id="totalTermAmount">
                {(
                  Number(interestDetails.termInterestAmount) +
                  Number(interestDetails.termPrincipleAmount)
                ).toFixed(2)}
              </StyledTableCell>
              <StyledTableCell align="right" id="totalPeriodAmount">
                {interestDetails.totalAmountInPeriod}
              </StyledTableCell>
            </StyledTableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default MortgageCalculationSummary;
